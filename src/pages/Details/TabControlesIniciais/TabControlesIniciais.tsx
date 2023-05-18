import * as dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import { Box, Typography } from '@mui/material';
import { PostAdd, Print, FormatListNumbered } from '@mui/icons-material';
import CustomButton from '../../../components/CustomButton';
import TableNaoCalendaricos from "./Tables/TableNaoCalendaricos";
import TableCalendaricos from './Tables/TableCalendaricos';
import DialogSomar from './Dialogs/DialogSomar';
import LoadingCard from '../../../components/LoadingCard';
import ErrorCard from '../../../components/ErrorCard';
import ControleEquipamento from '../../../models/ControleEquipamento';
import ControleInicialCalendarico from '../../../models/ControleInicialCalendarico';
import ControlePeriodo from '../../../models/ControlePeriodo';
import { enqueueSnackbar } from 'notistack';
import Grow from '@mui/material/Grow';

const TabControlesIniciais = () => {
    const { id: nrEquipamento } = useParams();
    //corrigir essa tipagem do dayjs
    const [selectedDate, setSelectedDate] = useState<string>(dayjs())
    const [openDialogSomar, setOpenDialogSomar] = useState<boolean>(false);
    const [calendaricos, setCalendaricos] = useState<ControleInicialCalendarico[]>([])
    const [naoCalendaricos, setNaoCalendaricos] = useState<ControleEquipamento[]>([])
    const [periodo, setPeriodo] = useState<ControlePeriodo[]>([]);
    const { sendRequest: sendNaoCalendaricosRequest, isLoading: naoCalendaricoIsLoading, error: errorNaoCalendarico } = useHttp();
    const { sendRequest: sendCalendaricosRequest, isLoading: calendaricoIsLoading, error: errorCalendarico } = useHttp();
    const { sendRequest: sendSomarPeriodoRequest, isLoading: SomarPeriodoIsLoading, error: errorSomar } = useHttp();

    useEffect(() => {
        sendNaoCalendaricosRequest({ url: `aeronave/controle/${nrEquipamento}` }, (result: ControleEquipamento[]) => {
            setNaoCalendaricos(result);
        })

        sendCalendaricosRequest({ url: `aeronave/controle/calendarico/${nrEquipamento}` }, (result: ControleInicialCalendarico[]) => {
            setCalendaricos(result);
        })
    }, [])

    useEffect(() => {
        sendSomarPeriodoRequest({
            url: `aeronave/controle/calendarico/periodo/${nrEquipamento}`,
            method: 'POST',
            body: { dtInicial: dayjs(selectedDate).format("MM/DD/YYYY") },
            headers: { 'Content-Type': 'application/json', },
        }, (data: { message: string, controlePeriodo: ControlePeriodo[] }) => {
            setPeriodo(data.controlePeriodo);
            if (openDialogSomar) {
                enqueueSnackbar(data.message, { variant: 'success' })
            }
        })
    }, [selectedDate])

    const onCloseDialogSomar = () => {
        setOpenDialogSomar(false);
    }

    const onDateChange = (newDate: string | null) => {
        setSelectedDate(newDate!);
    }

    return (
        <>
            {(naoCalendaricoIsLoading || calendaricoIsLoading) && !(errorCalendarico && errorNaoCalendarico) && (<LoadingCard />)}
            {(!naoCalendaricoIsLoading && !calendaricoIsLoading) && (errorCalendarico || errorNaoCalendarico) && (<ErrorCard message={errorCalendarico} />)}
            {(!naoCalendaricoIsLoading && !calendaricoIsLoading) && !(errorCalendarico && errorNaoCalendarico) && (
                <Grow
                    in={naoCalendaricos}
                    unmountOnExit
                    style={{ transformOrigin: '0 0 0' }}
                    {...(naoCalendaricos ? { timeout: 1000 } : {})}>
                    <Box>
                        <Box display={'flex'} gap={4} marginBottom={4}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                                <CustomButton onClick={() => { setOpenDialogSomar(true) }} >{<PostAdd />}</CustomButton>
                                Somar
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                                <CustomButton onClick={() => { }} >{<Print />}</CustomButton>
                                Imprimir
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                                <CustomButton onClick={() => { }} >{<FormatListNumbered />}</CustomButton>
                                Excel
                            </Box>
                        </Box>

                        <Typography sx={{ flex: '1 1 100%' }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Controles do Equipamento (Não Calendáricos)
                        </Typography>
                        <TableNaoCalendaricos controles={naoCalendaricos} />
                        <Typography
                            sx={{ flex: '1 1 100%', marginTop: 3 }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Controles do Equipamento (Calendáricos)
                        </Typography>
                        <TableCalendaricos controles={calendaricos} />
                    </Box>
                </Grow>)}
            <DialogSomar open={openDialogSomar} onClose={onCloseDialogSomar} selectedDate={selectedDate} onDataChange={onDateChange} controlePeriodo={periodo} />
        </>)
}

export default TabControlesIniciais;