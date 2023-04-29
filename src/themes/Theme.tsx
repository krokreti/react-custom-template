import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
// const Theme = createTheme({
//     palette: {
//         primary: {
//             main: '#1976d2',
//         },
//         secondary: {
//             main: '#f50057',
//         },
//         // error: {
//         //     main: '#000'
//         // },
//         background: {
//             default: '#EEF2F6'
//         }
//     },

// });

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#000'
        },
        background: {
            default: '#EEF2F6'
        }

    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
        primary?: {
            main?: string;
        },
        secondary?: {
            main?: string,
        },
        background?: {
            default?: string,
        }
    }
}

const Theme = createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
    primary: {
        main: '#1976d2',
    },
    secondary: {
        main: '#f50057',
    },
    background: {
        default: '#EEF2F6'
    }
});


export default Theme;