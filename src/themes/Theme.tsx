import { createTheme } from '@mui/material/styles';
import { orange, grey } from '@mui/material/colors';
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
        },
    }
}

export const lightTheme = createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#EEF2F6',
        },
        secondary: {
            main: '#f50057',
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
    },
    customBorder: {
        default: grey[400]
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2'
        },
        background: {
            default: '#121212'
        },

    },
    primary: {
        main: '#121212'
    },
    customBorder: {
        default: grey[600]
    },
})

