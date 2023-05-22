import { useState, useEffect } from "react";
import EquipamentoAeronave from "../../../models/EquipamentoAeronave";
import { Autocomplete, CircularProgress, TextField, Grid } from '@mui/material';
import FilterDashboardItem from "./FilterDashboardItem";
import DashboardInfo from "./DashboardInfo";

type FilterType = {
    loading: boolean,
    aeronaves: readonly EquipamentoAeronave[],
    onChange: (value: string) => void
}

const FilterDashboard: React.FC<FilterType> = ({ loading, aeronaves, onChange }) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        if (!open) {
            setInputValue('');
        }
    }, [open]);

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    }

    return (
        <Grid container spacing={3} marginBottom={{ xs: 3, sm: 0 }}>
            <Grid item xs={12} md={6} >
                <DashboardInfo />
            </Grid>
            <Grid item xs={12} md={6} >
                <Autocomplete
                    id="asynchronous-aeronave"
                    open={inputValue.length >= 3}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    sx={{ width: '100%' }}
                    // isOptionEqualToValue={(option: string, value: string) => (option === value)}
                    isOptionEqualToValue={(option: EquipamentoAeronave, value: EquipamentoAeronave) => (option.NR_MATRICULA === value.NR_MATRICULA || option.CD_MODELO === value.CD_MODELO || option.NR_PN === value.NR_PN)}
                    getOptionLabel={(option: EquipamentoAeronave) => <FilterDashboardItem key={option.NR_EQUIPAMENTO} matricula={option.NR_MATRICULA} projeto={option.SG_PROJETO} tipo={option.IN_DISPONIBILIDADE} pn={option.NR_PN} nrEquipamento={option.NR_EQUIPAMENTO} />}
                    filterOptions={(options: EquipamentoAeronave[]) => options}
                    options={aeronaves}
                    loading={loading}
                    renderInput={(params: any) => (
                        <TextField
                            value={inputValue}
                            onChange={onValueChange}
                            {...params}
                            label="Filtrar"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                />
            </Grid>
        </Grid>
    );
}

export default FilterDashboard;
