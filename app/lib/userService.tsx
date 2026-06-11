// lib/userService.ts
// Handles creating + updating the Firestore user document on every login.

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "./firebase";

// ── Types ─────────────────────────────────────────────────────────────────────

export type UserRole = "user" | "admin";

export interface UserDocument {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: UserRole;
  // timestamps
  createdAt: Timestamp;
  lastLoginAt: Timestamp;
  updatedAt: Timestamp;
  // optional profile fields (editable later)
  phone?: string | null;
  bio?: string | null;
  // meta
  loginCount: number;
  provider: string; // 'google.com' | 'password' | etc.
}

// ── Create or update user doc on every sign-in ────────────────────────────────

export async function syncUserDocument(
  firebaseUser: User,
): Promise<UserDocument> {
  const ref = doc(db, "users", firebaseUser.uid);
  const snap = await getDoc(ref);

  // Detect auth provider from the user's providerData
  const provider = firebaseUser.providerData[0]?.providerId ?? "unknown";

  if (!snap.exists()) {
    // ── First time — create the document with default role: 'user' ────────────
    const newDoc: UserDocument = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      role: "user", // default — change to 'admin' in Firestore console
      createdAt: serverTimestamp() as Timestamp,
      lastLoginAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
      loginCount: 1,
      provider,
      phone: null,
      bio: null,
    };
    await setDoc(ref, newDoc);
    return newDoc;
  }

  // ── Returning user — update login metadata only, preserve role ───────────
  await updateDoc(ref, {
    lastLoginAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    loginCount: (snap.data().loginCount ?? 0) + 1,
    // keep these in sync with Firebase Auth in case the user updated their profile
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    email: firebaseUser.email,
    provider,
  });

  return snap.data() as UserDocument;
}

// ── Fetch a user document ─────────────────────────────────────────────────────

export async function getUserDocument(
  uid: string,
): Promise<UserDocument | null> {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? (snap.data() as UserDocument) : null;
}
