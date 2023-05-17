import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

var baseUrl = import.meta.env.VITE_API_URL;

interface authState {
    NM_GUERRA?: string,
    CD_POSTO?: string,
    NR_SARAM?: string,
    CD_FOTO?: string,
    cpf: string,
    usuario?: string,
}

export const fetchUserByCpf = createAsyncThunk(
    'usuario/fetchByCpf',
    async (cpf: string) => {
        const response = await fetch(`${baseUrl}perfil/pessoa/${cpf}`)
        return await response.json();
    }
)

export const fetchUserPictureBySaram = createAsyncThunk(
    'usuario/fetchUserPictureBySaram',
    async (saram: string) => {
        const response = await fetch(`https://compraer.prd.rancher.ccarj.intraer/compraer-suporte-api/api/foto/SQL/${saram}`, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-type': 'application/json'
            },
        })
        return await response.json();
    }
)

const initialAuthState: authState = {
    NM_GUERRA: '',
    CD_POSTO: '',
    NR_SARAM: '',
    CD_FOTO: '',
    cpf: '',
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        setUserCpf(state: authState, action: PayloadAction<string>) {
            state.cpf = action.payload;
        },
        getUser(state: authState) {
            console.log(state);
            return `${state.CD_POSTO} ${state.NM_GUERRA}`
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchUserByCpf.fulfilled, (state: authState, action: PayloadAction<authState>) => {
            state = {
                cpf: state.cpf,
                CD_POSTO: action.payload.CD_POSTO,
                NM_GUERRA: action.payload.NM_GUERRA,
                NR_SARAM: action.payload.NR_SARAM,
                usuario: `${action.payload.CD_POSTO} ${action.payload.NM_GUERRA}`
            }
        }),
            builder.addCase(fetchUserPictureBySaram.fulfilled, (state: authState, action: any) => {
                state.CD_FOTO = action.payload.imFoto;
            })
    },
});

export const authActions = authSlice.actions;
//exportar uma variavel em especifico
export const authStatus = (state: RootState) => state.auth;
// export const usuario = (state: RootState) => state.auth.loggedUser;
// export const usuario = (state: RootState) => `${state.auth.CD_POSTO} ${state.auth.NM_GUERRA}`;
export const cpf = (state: RootState) => state.auth.cpf;
export const usuario = (state: RootState) => state.auth.usuario;
export default authSlice.reducer;