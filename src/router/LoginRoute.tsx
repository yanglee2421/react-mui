// Router Imports
import { Navigate, useMatches, useSearchParams } from "react-router-dom";

export function LoginRoute() {
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
        pathname: "/401",
        search: searchParams.toString(),
      }}
    ></Navigate>
  );
}
