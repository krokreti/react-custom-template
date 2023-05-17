import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

var baseUrl = import.meta.env.VITE_API_URL;

interface OccupationAreaState {
    unidade: string,
    area: string,
}

const retrieveStoredOccupationArea = () => {
    const storedUnidade = localStorage.getItem('unidade');
    const storedArea = localStorage.getItem('area');
    let initialUnidade: string = '';
    let initialArea: string = '';
    if (storedUnidade && storedArea) {
        initialUnidade = storedUnidade;
        initialArea = storedArea;
    }
    return {
        unidade: initialUnidade,
        area: initialArea
    }
}

export const fetchUnidadesPorCpf = createAsyncThunk(
    'unidade/fetchUnidadePorCpf',
    async (cpf: string) => {
        const response = await fetch(`${baseUrl}unidade/pessoa/${cpf}`)
        return await response.json();
    }
)

const initialOccupationAreaState: OccupationAreaState = {
    unidade: retrieveStoredOccupationArea().unidade,
    area: retrieveStoredOccupationArea().area,
}

const verifyUnidade = (state: OccupationAreaState): boolean => {
    if (state.unidade == '' || state.unidade == undefined || state.unidade == null) {
        return false;
    } else {
        return true;
    }
}

const occupationAreaSlice = createSlice({
    name: 'occupationArea',
    initialState: initialOccupationAreaState,
    reducers: {
        setToken(state: OccupationAreaState, action: PayloadAction<OccupationAreaState>) {
            localStorage.setItem('area', action.payload.area)
            localStorage.setItem('unidade', action.payload.unidade)
            state.area = action.payload.area;
            state.unidade = action.payload.unidade;
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(fetchUnidadesPorCpf.fulfilled, (state: OccupationAreaState, action: PayloadAction<OccupationAreaState>) => {
            // console.log(action.payload);
        })
    }
});

export const occupationAreaActions = occupationAreaSlice.actions;
export const unidade = (state: RootState) => state.occupationArea.unidade;
export const area = (state: RootState) => state.occupationArea.area;
export const hasUnidade = (state: RootState) => verifyUnidade(state.occupationArea.unidade);

export default occupationAreaSlice.reducer;