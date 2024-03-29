// MUI Imports
import { Box } from "@mui/material";

// Components Imports
import { Transition } from "react-transition-group";

// React Imports
import React from "react";

export function FadeTransition(props: React.PropsWithChildren) {
  // ** Props
  const { children, ...restProps } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);

  return (
    <Transition
      nodeRef={nodeRef}
      addEndListener={(done) => {
        nodeRef.current?.addEventListener("transitionend", done);
      }}
      unmountOnExit
      {...restProps}
    >
      {(status) => {
        return (
          <Box
            ref={nodeRef}
            sx={(theme) => {
              switch (status) {
                // Exit stage
                case "entered":
                  return {
                    opacity: 1,
                    transform: "scale(1)",
                  };

                case "exiting":
                  return {
                    transition: theme.transitions.create([
                      "opacity",
                      "transform",
                    ]),
                    opacity: 0,
                    transform: "scale(0.9)",
                  };

                // Enter stage
                case "exited":
                  return {
                    opacity: 0,
                    transform: "scale(1.1)",
                  };

                case "entering":
                  return {
                    transition: theme.transitions.create([
                      "opacity",
                      "transform",
                    ]),
                    opacity: 1,
                    transform: "scale(1)",
                  };

                case "unmounted":
                default:
                  return {};
              }
            }}
          >
            {children}
          </Box>
        );
      }}
    </Transition>
  );
}
