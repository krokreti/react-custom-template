import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface authState {
    message: string,
}

const initialAuthState: authState = {
    message: 'Ta funcionando',
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        showMessage: () => {
            console.log('dispatching a message!');
        }
    }
});

export const authActions = authSlice.actions;
//exportar uma variavel em especifico
export const authStatus = (state: RootState) => state.auth;
// export const loggedUser = (state: RootState) => state.auth.loggedUser;
export default authSlice.reducer;