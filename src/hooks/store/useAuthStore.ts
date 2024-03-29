// Firebase Imports
import { getAuth, Auth } from "firebase/auth";
import { app } from "@/api/firebase";

// Zustand Imports
import { create } from "zustand";

export const useAuthStore = create<AuthStore>((set, get) => {
  return {
    value: {
      auth: getAuth(app),
      updateCount: 0,
    },
    update() {
      return set({
        value: {
          auth: getAuth(app),
          updateCount: get().value.updateCount + 1,
        },
      });
    },
  };
});

export interface AuthStore {
  value: {
    auth: Auth;
    updateCount: number;
  };
  update(): void;
}
