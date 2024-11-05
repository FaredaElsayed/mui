import { Avatar, Link, Typography, Toolbar, AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;
function Appbar() {
    const navigateTo = useNavigate()
    return (
        <AppBar position="static" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
                <Link underline="none" sx={{ flexGrow: 1, "&:hover": { fontSize: "17px" }, cursor: "pointer" }} onClick={() => { navigateTo("/") }} component="a" color='inherit'>My expenses</Link>
                <Typography color='inherit' variant='body1' mr={2} >Farida Elsayed</Typography>
                <Avatar alt="Farida" src="WhatsApp Image 2024-10-13 at 9.00.50 PM.jpeg" />
            </Toolbar>
        </AppBar>
    )
}

export default Appbar