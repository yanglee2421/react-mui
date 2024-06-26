import { Navigate, useMatches, useSearchParams } from "react-router-dom";

export function NavigateToLogin() {
  const matches = useMatches();
  const [searchParams] = useSearchParams();

  const currentRoute = matches[matches.length - 1];

  if (!currentRoute) {
    return null;
  }

  searchParams.set("returnURL", currentRoute.pathname);

  return (
    <Navigate
      to={{
        pathname: "/login",
        search: searchParams.toString(),
      }}
    />
  );
}
