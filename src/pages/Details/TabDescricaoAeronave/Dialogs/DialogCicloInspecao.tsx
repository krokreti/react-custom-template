import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CustomDialog from "../../../../components/CustomDialog";
import TabelaManutencao from "../../../../models/TabelaManutencao";
import CustomButton from "../../../../components/CustomButton";
import { useState, useEffect } from 'react';

type Props = {
    ciclos: TabelaManutencao[],
    open: boolean,
    isLoading: boolean,
    onClose: () => void,
    onSave: (cdTabela: number) => void,
}

const DialogCicloInspecao: React.FC<Props> = (props) => {
    const [selectedValue, setSelectedValue] = useState<number>();
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        setSelectedValue(value);
    };

    useEffect(() => {
        if (selectedValue == null || selectedValue == undefined) {
            setFormIsValid(false);
        } else {
            setFormIsValid(true);
        }
    }, [selectedValue])

    var content = (
        <>
            {props.ciclos.length == 0 && (
                <Typography fontStyle={'italic'}>Não há ciclos disponíveis.</Typography>
            )}
            {props.ciclos.length > 0 && (
                <FormControl>
                    <FormLabel id="ciclo-inspecao-radio-group" sx={{ marginBottom: 2 }}>Ciclos de Inspeção:</FormLabel>
                    <RadioGroup aria-labelledby="ciclo-inspecao-radio-group" name="radio-buttons-group" onChange={handleChange}>
                        {props.ciclos.map((ciclo) => (
                            <FormControlLabel key={ciclo.CD_TABELA} control={<Radio />} label={
                                <Typography fontWeight={'bold'}>{ciclo.CD_TABELA} - {ciclo.DS_TABELA}</Typography>
                            } value={ciclo.CD_TABELA} />
                        ))}
                    </RadioGroup>
                </FormControl>
            )}
        </>
    );

    var actions = (<>
        <CustomButton onClick={props.onClose} color="primary" variant="text" >Cancelar</CustomButton>
        <CustomButton disabled={!formIsValid} color="success" onClick={() => { props.onSave(selectedValue!) }}> Salvar</CustomButton>
    </>);

    return (<CustomDialog title="Alterar Ciclo de Inspeção" open={props.open} handleClose={props.onClose} content={content} actions={actions} />)
}

export default DialogCicloInspecao;