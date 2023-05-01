import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Children from '../../models/Children';
import FlightIcon from '@mui/icons-material/Flight';
import ProfileAvatar from './ProfileAvatar';
import CustomDrawer from './CustomDrawer';
import { Link } from 'react-router-dom';
import ThemeController from './ThemeController';
import { useAppSelector } from '../../hooks/redux-hooks';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    background: theme.primary.main,

    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const NavBar: React.FC<Children> = (props) => {
    const isLightMode = useAppSelector(state => state.theme.isLightMode);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ boxShadow: isLightMode ? theme.shadows[2] : 'none' }}>
                <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <CustomDrawer />
                        <Typography variant="h6" noWrap component="div" display={'flex'} alignItems={'center'}>
                            {/* <FlightIcon sx={{ marginRight: 2 }} /> */}
                            <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }} >
                                Manutenção de Aeronaves
                            </Link>
                        </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <ThemeController />
                        <ProfileAvatar />
                    </Box>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <DrawerHeader />
                {props.children}
            </Main>
        </Box>
    );
}

export default NavBar;