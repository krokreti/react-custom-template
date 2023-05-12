import { useEffect, useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import keycloak from '../../plugins/keycloak.js';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAppDispatch } from '../../hooks/redux-hooks.js';
import { fetchUserByCpf, fetchUserPictureBySaram } from '../../store/auth-slice.js';

const ProfileAvatar = () => {
    const [usuario, setUsuario] = useState<string>('');
    const [saram, setSaram] = useState<string | undefined>();
    const dispatch = useAppDispatch();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    useEffect(() => {
        dispatch(fetchUserByCpf(keycloak.tokenParsed.preferred_username)).then(state => {
            setUsuario(`${state.payload.CD_POSTO} ${state.payload.NM_GUERRA}`)
            setSaram(state.payload.NR_SARAM)
        });
    }, [])

    useEffect(() => {
        if (saram) {
            dispatch(fetchUserPictureBySaram(saram)).then(state => {
                console.log(state);
            })
        }
    }, [saram])



    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        keycloak.logout();
    }

    return (
        <Box display={'flex'} alignItems={'center'}>
            {keycloak.authenticated && (
                <Typography >
                    {usuario}
                </Typography>
            )}
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"

            >
                <AccountCircle />
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default ProfileAvatar;