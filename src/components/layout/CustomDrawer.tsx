import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { themeActions } from "../../store/theme-slice";


const CustomDrawer = () => {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState<boolean>();
    const dispatch = useAppDispatch();
    const isLightMode = (useAppSelector(state => state.theme.isLightMode));

    const toggleTheme = () => {
        if (isLightMode) {
            dispatch(themeActions.changeTheme('dark'));
        } else {
            dispatch(themeActions.changeTheme('light'));
        }
    }

    const navigateHandler = (route: string) => {
        navigate(route);
    }

    const toggleDrawer = (open: boolean) =>
        (_event: React.MouseEvent) => {
            setOpenDrawer(open);
        };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding onClick={() => { navigateHandler('/') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => { navigateHandler('details') }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Relatórios'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box display={'flex'} justifyContent={'center'} marginTop={3}>
                <ToggleButtonGroup
                    color='standard'
                    onChange={toggleTheme}
                    value={isLightMode}
                    exclusive>
                    <ToggleButton value={true} aria-label="light" color='warning'>
                        <WbSunnyIcon /> Light
                    </ToggleButton>
                    <ToggleButton value={false} aria-label="dark" color='info'>
                        <NightsStayIcon /> Dark
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

        </Box>
    );

    return (
        <div>
            <>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
                    onClick={toggleDrawer(true)}
                > <MenuIcon /></IconButton>
                <Drawer
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </>

        </div>
    );
}

export default CustomDrawer;
