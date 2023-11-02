// MUI Imports
import {
  Avatar,
  Badge,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

// React Imports
import React from "react";
import { useLogin } from "@/hooks";

export function UserDropdown() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const openHandler: React.MouseEventHandler<HTMLSpanElement> = (evt) => {
    setAnchorEl(evt.currentTarget);
    setOpen(true);
  };
  const closeHandler = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // Login hooks
  const { signOut } = useLogin();

  return (
    <>
      <Badge
        onClick={openHandler}
        variant="dot"
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={(theme) => {
          return {
            ml: 2,
            cursor: "pointer",

            "& .MuiBadge-badge": {
              backgroundColor: "#44b700",
              color: "#44b700",
              boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
              "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
              },
            },
            "@keyframes ripple": {
              "0%": {
                transform: "scale(.8)",
                opacity: 1,
              },
              "100%": {
                transform: "scale(2.4)",
                opacity: 0,
              },
            },
          };
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/122474700?v=4"
          alt="avator"
        />
      </Badge>
      <Menu
        open={open}
        onClose={closeHandler}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ "& .MuiMenu-paper": { width: 230, mt: 4 } }}
      >
        <MenuItem>one</MenuItem>
        <MenuItem>one</MenuItem>
        <Divider></Divider>
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}