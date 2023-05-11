import { useState, useEffect } from "react";
import EquipamentoAeronave from "../../../models/EquipamentoAeronave";
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import FilterDashboardItem from "./FilterDashboardItem";

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

    return (<Autocomplete
        id="asynchronous-aeronave"
        open={inputValue.length >= 3}
        onOpen={() => {
            setOpen(true);
        }}
        onClose={() => {
            setOpen(false);
        }}
        sx={{ marginBottom: 3, maxWidth: '600px' }}
        isOptionEqualToValue={(option: string, value: string) => option === value}
        getOptionLabel={(option: EquipamentoAeronave) => <FilterDashboardItem matricula={option.NR_MATRICULA} projeto={option.SG_PROJETO} tipo={option.IN_DISPONIBILIDADE} pn={option.NR_PN} nrEquipamento={option.NR_EQUIPAMENTO} />}
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
    );
}

export default FilterDashboard;
