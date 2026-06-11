// lib/firebase-blog-service.ts
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  Timestamp,
  writeBatch,
} from "firebase/firestore";

export interface Blog {
  id: string; // Firebase document ID
  numericId?: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  status: "Published" | "Draft";
  image: string;
  excerpt: string;
  content: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

const COLLECTION_NAME = "blogs";

// Get all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Blog,
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

// Get published blogs only
export async function getPublishedBlogs(): Promise<Blog[]> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where("status", "==", "Published"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Blog,
    );
  } catch (error) {
    console.error("Error fetching published blogs:", error);
    return [];
  }
}

// Add new blog
export async function addBlog(
  blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">,
): Promise<Blog | null> {
  try {
    const newBlog = {
      ...blogData,
      numericId: Date.now(), // For easier reference
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), newBlog);
    const savedBlog = { ...newBlog, id: docRef.id };

    return savedBlog;
  } catch (error) {
    console.error("Error adding blog:", error);
    return null;
  }
}

// Update blog
export async function updateBlog(
  id: string,
  blogData: Partial<Blog>,
): Promise<boolean> {
  try {
    const blogRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(blogRef, {
      ...blogData,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error updating blog:", error);
    return false;
  }
}

// Delete blog
export async function deleteBlog(id: string): Promise<boolean> {
  try {
    const blogRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(blogRef);
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    return false;
  }
}

// Bulk delete blogs
export async function deleteMultipleBlogs(ids: string[]): Promise<boolean> {
  try {
    const batch = writeBatch(db);
    ids.forEach((id) => {
      const blogRef = doc(db, COLLECTION_NAME, id);
      batch.delete(blogRef);
    });
    await batch.commit();
    return true;
  } catch (error) {
    console.error("Error deleting multiple blogs:", error);
    return false;
  }
}
