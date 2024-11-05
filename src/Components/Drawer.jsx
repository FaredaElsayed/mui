import { Home, Create, DarkMode, LightMode, Person, Settings, Logout } from '@mui/icons-material';
import { ListItemButton, ListItemText, ListItemIcon, Drawer, Divider, ListItem, List, IconButton, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
function Drawerr({ setMyMode }) {
    const navigateTo = useNavigate();
    const theme = useTheme()
    const handleToggleMode = () => {
        const newMode = theme.palette.mode === 'dark' ? 'light' : 'dark';
        setMyMode(newMode);
        localStorage.setItem('themeMode', newMode); // Save mode in local storage
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                    <IconButton onClick={handleToggleMode} aria-label="Toggle dark mode">  {theme.palette.mode === 'dark' ? <LightMode sx={{ color: "orange" }} /> : <DarkMode />} </IconButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigateTo("/") }}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigateTo("/create") }} >
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>


        </Drawer>
    )
}

export default Drawerr
