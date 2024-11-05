import { Box, InputAdornment, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import * as React from 'react';
import { ChevronRight } from '@mui/icons-material';
export default function Create() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    margin: "10px"
  }));
  return (
    <Box mt={3} sx={{ width: "360px" }} component="form">
      <TextField
        fullWidth
        label="Transaction Title"
        sx={{ m: 1, display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <TextField
        label="Transaction Title"
        fullWidth
        sx={{ m: 1, display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <ColorButton variant="contained">Submit <ChevronRight /></ColorButton>

    </Box>

  );
}
