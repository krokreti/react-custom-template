import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import occupationAreaSlice from './occupation-area-slice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        occupationArea: occupationAreaSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch