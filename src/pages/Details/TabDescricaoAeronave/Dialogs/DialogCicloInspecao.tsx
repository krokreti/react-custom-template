import CustomDialog from "../../../../components/CustomDialog";
import TabelaManutencao from "../../../../models/TabelaManutencao";
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const DialogCicloInspecao: React.FC<{ ciclos: TabelaManutencao[], open: boolean, onClose: () => void }> = (props) => {

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

    var actions = (<>Actions</>);

    return (<CustomDialog title="Alterar Ciclo de Inspeção" open={props.open} handleClose={props.onClose} content={content} actions={actions} />)
}

export default DialogCicloInspecao;