import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

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

const initialOccupationAreaState: OccupationAreaState = {
    unidade: retrieveStoredOccupationArea().unidade,
    area: retrieveStoredOccupationArea().area,
}

const occupationAreaSlice = createSlice({
    name: 'occupationArea',
    initialState: initialOccupationAreaState,
    reducers: {
        setToken(state, action: PayloadAction<OccupationAreaState>) {
            localStorage.setItem('area', action.payload.area)
            localStorage.setItem('unidade', action.payload.unidade)
            state.area = action.payload.area;
            state.unidade = action.payload.unidade;
        }
    }
});

export const occupationAreaActions = occupationAreaSlice.actions;
export const unidade = (state: RootState) => state.occupationArea.unidade;
export const area = (state: RootState) => state.occupationArea.area;

export default occupationAreaSlice.reducer;