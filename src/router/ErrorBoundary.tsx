import { Button } from "@mui/material";
import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import { InternalServerError } from "./InternalServerError";
import { NotFound } from "./NotFound";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFound />;
      default:
        return <InternalServerError />;
    }
  }

  if (error instanceof Error) {
    return <InternalServerError />;
  }

  return (
    <Button variant="contained" component={Link} to={"/"}>
      take me home
    </Button>
  );
}
