import { Box, Grid, Paper, Stack, alpha } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import bgImg from "@/assets/images/justHer.jpg";
import { AsyncStore } from "./AyncStore";
import { Calendar } from "./Calendar";
import { Countdown } from "./Countdown";
import { InputNumber } from "./InputNumber";
import { RollCard } from "./RollCard";

export function Home() {
  const [number, setNumber] = React.useState(Number.NaN);

  return (
    <Grid container spacing={{ xs: 3, md: 4 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius(theme) {
              return theme.shape.borderRadius + "px";
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,

              backgroundImage: `url(${bgImgHref})`,
              backgroundPosition: "50%",
              backgroundSize: "150%",

              filter: "blur(15px)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 2,

              backgroundColor: alpha(grey[700], 0.4),
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 3,

              display: "flex",
              alignItems: "center",

              height: 320,

              padding: 4,
            }}
          >
            <img src={bgImgHref} width={192} height={108} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Calendar />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <RollCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Countdown />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper sx={{ p: 3 }}>
          <Stack spacing={3}>
            <InputNumber
              value={number}
              onChange={setNumber}
              step={1}
              min={1}
              max={100}
            />
            <AsyncStore />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

const bgImgHref = new URL(bgImg, import.meta.url).href;
