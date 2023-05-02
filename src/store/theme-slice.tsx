import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

type ThemeType = 'light' | 'dark';

interface themeState {
    theme: ThemeType,
    isLightMode: boolean,
}

const retrieveStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    let initialTheme: ThemeType = 'light';
    if (storedTheme) {
        initialTheme = storedTheme as ThemeType;
    }
    return {
        theme: initialTheme,
        isLightMode: (initialTheme == 'light'),
    }
}

const initialThemeState: themeState = {
    theme: retrieveStoredTheme().theme,
    isLightMode: retrieveStoredTheme().isLightMode,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        getTheme: (state) => {
            console.log(state.theme);
        },
        changeTheme: (state, action: PayloadAction<ThemeType>) => {
            localStorage.setItem('theme', action.payload);
            state.theme = action.payload;
            state.isLightMode = !state.isLightMode;
        },
    }
});

export const themeActions = themeSlice.actions;
export const themeStatus = (state: RootState) => state.theme.theme;
export const isLightMode = (state: RootState) => state.theme.isLightMode
export default themeSlice.reducer;