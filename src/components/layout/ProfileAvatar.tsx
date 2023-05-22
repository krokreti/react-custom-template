import keycloak from '../../plugins/keycloak.js';
import { useEffect, useState } from 'react';
import { IconButton, Avatar, Typography, Box, MenuItem, Menu, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks/redux-hooks.js';
import { fetchUserByCpf, fetchUserPictureBySaram } from '../../store/auth-slice.js';

const ProfileAvatar = () => {
    const theme = useTheme();
    const [posto, setPosto] = useState<string>('');
    const [nmGuerra, setNmGuerra] = useState<string>('');
    const [saram, setSaram] = useState<string | undefined>();
    const [foto, setFoto] = useState<string | undefined>();
    const dispatch = useAppDispatch();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    useEffect(() => {
        dispatch(fetchUserByCpf(keycloak.tokenParsed!.preferred_username)).then((state: any) => {
            setPosto(state.payload.CD_POSTO)
            setNmGuerra(state.payload.NM_GUERRA);
            setSaram(state.payload.NR_SARAM)
            setFoto(state.payload.CD_FOTO);
        });
    }, [])

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
            {keycloak.authenticated && !isSmallScreen && (
                <Typography>
                    {`${posto} ${nmGuerra}`}
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
                {!foto && <Avatar alt={nmGuerra} />}
                {foto && (
                    <Avatar alt={nmGuerra} src={`data:image/png;base64, ${foto}`} />
                )}
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