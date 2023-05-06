import CustomButton from '../../../../components/CustomButton';
import CustomDialog from "../../../../components/CustomDialog";
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableTotaisControle from '../Tables/TableTotaisControle';
import ControlePeriodo from '../../../../models/ControlePeriodo';

type Props = {
    open: boolean,
    onClose: () => void,
    onDataChange: (newDate: string | null) => void,
    selectedDate: string,
    controlePeriodo: ControlePeriodo[],
}

const DialogSomar: React.FC<Props> = (props) => {

    var content = <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
        <DatePicker label={'Período'} value={props.selectedDate} onChange={props.onDataChange} disableFuture />
        <TableTotaisControle controles={props.controlePeriodo} />
    </Box>

    var actions = <CustomButton variant='text' children={'Fechar'} onClick={props.onClose} />

    return (<CustomDialog title="Totais de Controles por Dia e Períodos" actions={actions} content={content} open={props.open} handleClose={props.onClose} />)
}

export default DialogSomar;