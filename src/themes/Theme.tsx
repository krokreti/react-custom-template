import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057',
        },
        // error: {
        //     main: '#000'
        // },
        background: {
            default: '#EEF2F6'
        }
    },
});

export default Theme;