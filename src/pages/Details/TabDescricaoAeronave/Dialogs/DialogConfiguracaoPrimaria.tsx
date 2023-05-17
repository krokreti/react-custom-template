import { useEffect, useState } from 'react';
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CustomDialog from "../../../../components/CustomDialog";
import ConfiguracaoPrimaria from "../../../../models/ConfiguracaoPrimaria";
import CustomButton from "../../../../components/CustomButton";
import LoadingCard from '../../../../components/LoadingCard';

type Props = {
    configuracoes: ConfiguracaoPrimaria[],
    open: boolean,
    isLoading: boolean,
    onClose: () => void,
    onSave: (nrConfiguracao: number) => void,
}

const DialogConfiguracaoPrimaria: React.FC<Props> = (props) => {
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
            {props.configuracoes.length == 0 && (
                <Typography fontStyle={'italic'}>Não há configurações disponíveis.</Typography>
            )}
            {props.configuracoes.length > 0 && (
                <FormControl>
                    <FormLabel id="configuracao-primaria-radio-group" sx={{ marginBottom: 2 }} >Configurações:</FormLabel>
                    <RadioGroup aria-labelledby="configuracao-primaria-radio-group" name="radio-buttons-group" onChange={handleChange}>
                        {props.configuracoes.map((configuracao) => (
                            <FormControlLabel key={configuracao.DS_CONFIGURACAO} control={<Radio />}
                                label={
                                    <Typography fontWeight={'bold'}>{configuracao.DS_CONFIGURACAO}</Typography>
                                } value={configuracao.NR_CONFIGURACAO} />
                        ))}
                    </RadioGroup>
                </FormControl>
            )}
        </>);

    var actions = (
        <><CustomButton onClick={props.onClose} color="primary" variant="text">Cancelar</CustomButton>
            <CustomButton disabled={!formIsValid} color="success" onClick={() => { props.onSave(selectedValue!) }}> Salvar</CustomButton>
        </>)

    return (<CustomDialog title="Alterar Configuração Primária" open={props.open} content={content} actions={actions} handleClose={props.onClose} />)
}

export default DialogConfiguracaoPrimaria;