// MUI Imports
import { AppBar, Toolbar, IconButton, Box, styled } from "@mui/material";
import { GitHub } from "@mui/icons-material";

// Components Imports
import {
  LanguageToggler,
  ModeToggler,
  MobileMenu,
  UserDropdown,
  Searcher,
} from "@/shared";
import { SwitchTransition, CSSTransition } from "react-transition-group";

// Router Imports
import { useOutlet, useLocation } from "react-router-dom";

// React Imports
import React from "react";

export function Layout() {
  const outlet = useOutlet();
  const location = useLocation();

  const [marginTop, setMarginTop] = React.useState(0);
  const appbarRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = appbarRef.current;

    if (!el) {
      return;
    }

    const observer = new ResizeObserver(([{ contentBoxSize }]) => {
      const [size] = contentBoxSize;
      setMarginTop(size.blockSize);
    });
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, [setMarginTop]);

  return (
    <>
      <AppBar ref={appbarRef}>
        <Toolbar>
          <MobileMenu color="inherit"></MobileMenu>
          <Searcher color="inherit" sx={{ mr: "auto" }}></Searcher>
          <LanguageToggler color="inherit"></LanguageToggler>
          <ModeToggler color="inherit"></ModeToggler>
          <IconButton
            href="https://github.com/yanglee2421/react-mui"
            target="_blank"
            color="inherit"
          >
            <GitHub></GitHub>
          </IconButton>
          <UserDropdown></UserDropdown>
        </Toolbar>
      </AppBar>

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={containerRef}
          addEndListener={(done) => {
            containerRef.current?.addEventListener("transitionend", done);
          }}
          unmountOnExit
          classNames={"fade"}
        >
          <StyledBox ref={containerRef} marginTop={`${marginTop}px`}>
            {outlet}
          </StyledBox>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

const StyledBox = styled(Box)(({ theme }) => {
  return {
    padding: theme.spacing(2),

    // Enter stage
    "&.fade-enter": {
      opacity: 0,
      transform: "scale(1.1)",
    },
    "&.fade-enter-active": {
      transition: theme.transitions.create(["opacity", "transform"]),
      opacity: 1,
      transform: "scale(1)",
    },
    "&.fade-enter-done": {
      opacity: 1,
      transform: "scale(1)",
    },

    // Exit stage
    "&.fade-exit": {
      opacity: 1,
      transform: "scale(1)",
    },
    "&.fade-exit-active": {
      transition: theme.transitions.create(["opacity", "transform"]),
      opacity: 0,
      transform: "scale(0.9)",
    },
    "&.fade-exit-done": {
      opacity: 0,
      transform: "scale(0.9)",
    },
  };
});
