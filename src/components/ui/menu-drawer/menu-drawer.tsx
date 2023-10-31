// MUI Imports
import { Close, Menu } from "@mui/icons-material";
import { IconButton, Drawer, Box, List } from "@mui/material";

// React Imports
import React from "react";

// Components Imports
import { Scrollbar } from "@/components/ui/scrollbar";

export function MenuDrawer() {
  const [open, setOpen] = React.useState(false);
  const closeHandler = () => {
    setOpen(false);
  };
  const openHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={openHandler}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={closeHandler}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 320,
          },
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          boxSizing={"border-box"}
          height={"100%"}
        >
          <Box
            p={2}
            sx={{
              borderBottom: 1,
              borderColor(theme) {
                return theme.palette.divider;
              },
            }}
          >
            <IconButton onClick={closeHandler}>
              <Close />
            </IconButton>
          </Box>
          <Box flex={1} overflow={"hidden"}>
            <Scrollbar>
              <List></List>
              <Box height={1000}></Box>
            </Scrollbar>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
