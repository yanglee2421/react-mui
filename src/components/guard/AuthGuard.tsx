import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { app } from "@/api/firebase/app";
import { useAuthStore } from "@/hooks/store/useAuthStore";
import { NavigateToLogin } from "./NavigateToLogin";

export function AuthGuard(props: React.PropsWithChildren) {
  const authValue = useAuthStore((s) => s.value);
  const updateAuth = useAuthStore((store) => store.update);

  React.useEffect(() => {
    return onAuthStateChanged(getAuth(app), updateAuth);
  }, [updateAuth]);

  if (authValue.auth.currentUser) {
    return props.children;
  }

  return <NavigateToLogin />;
}
