import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { themeActions } from "../../store/theme-slice";

const ThemeController = () => {
    const dispatch = useAppDispatch();
    const isLightMode = (useAppSelector(state => state.theme.isLightMode));

    const toggleTheme = () => {
        if (isLightMode) {
            dispatch(themeActions.changeTheme('dark'));
        } else {
            dispatch(themeActions.changeTheme('light'));
        }
    }

    return (<IconButton onClick={toggleTheme} color="inherit">
        {isLightMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>)
}

export default ThemeController;