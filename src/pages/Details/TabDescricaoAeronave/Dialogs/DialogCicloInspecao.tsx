import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CustomDialog from "../../../../components/CustomDialog";
import TabelaManutencao from "../../../../models/TabelaManutencao";
import CustomButton from "../../../../components/CustomButton";

type Props = {
    ciclos: TabelaManutencao[],
    open: boolean,
    isLoading: boolean,
    onClose: () => void,
    onSave: () => void,
}

const DialogCicloInspecao: React.FC<Props> = (props) => {

    var content = (<FormControl>
        <FormLabel id="ciclo-inspecao-radio-group">Ciclos de Inspeção:</FormLabel>
        <RadioGroup aria-labelledby="ciclo-inspecao-radio-group" name="radio-buttons-group">
            {props.ciclos.map((ciclo) => (
                <FormControlLabel key={ciclo.CD_TABELA} control={<Radio />} label={
                    <Typography fontWeight={'bold'}>{ciclo.CD_TABELA} - {ciclo.DS_TABELA}</Typography>
                } value={ciclo.CD_TABELA} />
            ))}
        </RadioGroup>
    </FormControl>);

    var actions = (<>
        <CustomButton onClick={props.onClose} color="primary" variant="text">Cancelar</CustomButton>
        <CustomButton color="success" onClick={props.onSave}> Salvar</CustomButton>
    </>);

    return (<CustomDialog title="Alterar Ciclo de Inspeção" open={props.open} handleClose={props.onClose} content={content} actions={actions} />)
}

export default DialogCicloInspecao;