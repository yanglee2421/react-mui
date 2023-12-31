// MUI Imports
import {
  styled,
  Box,
  Button,
  IconButton,
  Divider,
  ButtonGroup,
} from "@mui/material";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

// React Imports
import React from "react";

// Components Imports
import { SwiperTrans } from "./swiper-trans";

const UlStyled = styled("ul")(({ theme }) => {
  return {
    listStyle: "none",
    overflow: "hidden",
    scrollSnapType: "x mandatory",

    display: "flex",
    width: "25rem",
    padding: 0,
    // border: "blue dashed",
    margin: 0,

    "& > li": {
      scrollSnapStop: "always",
      scrollSnapAlign: "start",

      flex: "0 0 25rem",
      height: 100,
      padding: 0,
      border: "1px red dashed",
      margin: 0,
    },
    [theme.breakpoints.down("md")]: {
      overflow: "auto",
    },
  };
});

export const Swiper = () => {
  const ulRef = React.useRef<HTMLUListElement>(null);

  const handlePrevClick = () => {
    const el = ulRef.current;

    const rootStyle = globalThis.getComputedStyle(document.documentElement);
    el?.scrollBy({
      left: -25 * Number.parseInt(rootStyle.fontSize),
      behavior: "smooth",
    });
  };
  const handleNextClick = () => {
    const rootStyle = globalThis.getComputedStyle(document.documentElement);
    const el = ulRef.current;

    el?.scrollBy({
      left: 25 * Number.parseInt(rootStyle.fontSize),
      behavior: "smooth",
    });
  };

  const count = 5;
  const liEl = React.useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(i);
    }

    return list.map((item) => <li key={item}>{item}</li>);
  }, [count]);

  const dotEl = React.useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(i);
    }

    return list.map((item) => {
      const handleDotClick = () => {
        const rootStyle = globalThis.getComputedStyle(document.documentElement);
        const el = ulRef.current;

        el?.scroll({
          left: item * 25 * Number.parseInt(rootStyle.fontSize),
          behavior: "smooth",
        });
      };

      return (
        <Button key={item} onClick={handleDotClick}>
          dix-{item}
        </Button>
      );
    });
  }, [count]);

  return (
    <>
      <Box flex={1}>
        <UlStyled ref={ulRef}>{liEl}</UlStyled>
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIosNewRounded />
        </IconButton>
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIosRounded />
        </IconButton>
        <br />
        <ButtonGroup>{dotEl}</ButtonGroup>
        <Divider>Divider</Divider>
        <SwiperTrans />
      </Box>
    </>
  );
};
