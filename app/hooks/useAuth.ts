// hooks/useAuth.ts

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { syncUserDocument, UserDocument } from "@/lib/userService";

interface AuthState {
  user: User | null;
  userDoc: UserDocument | null; // full Firestore document
  loading: boolean;
  isAdmin: boolean;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [userDoc, setUserDoc] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Sync doc (creates on first login, updates lastLoginAt on return visits)
        const doc = await syncUserDocument(firebaseUser);
        setUserDoc(doc);
      } else {
        setUser(null);
        setUserDoc(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    user,
    userDoc,
    loading,
    isAdmin: userDoc?.role === "admin",
  };
}
