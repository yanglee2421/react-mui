import { FiberManualRecordOutlined } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import {
  useResolvedPath,
  useLocation,
  UNSAFE_NavigationContext,
  Link,
} from "react-router-dom";
import type { ListItemButtonProps } from "@mui/material";
import type { To, RelativeRoutingType } from "react-router-dom";

export function MenuLink(props: MenuLinkProps) {
  const { label, icon, to, end, caseSensitive, relative, ...restProps } = props;

  const path = useResolvedPath(to, { relative });
  const location = useLocation();
  const { navigator } = React.useContext(UNSAFE_NavigationContext);

  let locationPathname = location.pathname;
  let toPathname = navigator.encodeLocation
    ? navigator.encodeLocation(path).pathname
    : path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  const isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === "/");

  return (
    <ListItemButton
      component={Link}
      to={to}
      selected={isActive}
      sx={{
        bgcolor(theme) {
          if (isActive) {
            return `${theme.palette.primary.main} !important`;
          }
        },
        color(theme) {
          if (isActive) {
            return `${theme.palette.primary.contrastText} !important`;
          }
        },
      }}
      {...restProps}
    >
      <ListItemIcon
        sx={{
          color(theme) {
            if (isActive) {
              return `${theme.palette.primary.contrastText} !important`;
            }
          },
        }}
      >
        {icon || (
          <FiberManualRecordOutlined color="inherit"></FiberManualRecordOutlined>
        )}
      </ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </ListItemButton>
  );
}

export type MenuLinkProps = ListItemButtonProps & {
  label: React.ReactNode;
  icon?: React.ReactNode;
  to: To;
  end?: boolean;
  caseSensitive?: boolean;
  relative?: RelativeRoutingType;
};
