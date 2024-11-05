import * as React from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
export default function Home() {
  return (
    <Box mt={3}>
      <Paper sx={{ display: "flex", width: "366px", position: "relative", justifyContent: "space-between", mt: "22px", p: "5px", pt: "27px", alignItems: "center" }}>
        <Typography variant='h6' sx={{ fontSize: "1,3em" }} >GYM</Typography>
        <Typography variant='h6' sx={{ fontSize: "1,4em", fontWeight: "500", pr: "17px", opacity: ".8" }}>$100</Typography>
        <IconButton sx={{ position: "absolute", right: "0px", top: "0px", fontSize: "20px" }}>
          <Close />
        </IconButton>
      </Paper>
    </Box >
  );
}
