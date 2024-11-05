import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Drawerr from '../../Components/Drawer';
import Appbar from '../../Components/AppBar';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const Root = () => {

  const [myMode, setMyMode] = React.useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode : 'light';
  });

  const theme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
    },
  });
  React.useEffect(() => {
    localStorage.setItem('themeMode', myMode);
  }, [myMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar />
        <Drawerr setMyMode={setMyMode} />
        <Box sx={{ display: "flex", justifyContent: "center", ml: "240px" }} component="main"><Outlet /></Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;
