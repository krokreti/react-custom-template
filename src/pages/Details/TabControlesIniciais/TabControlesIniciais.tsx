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
import ControleEquipamento from '../../../models/ControleEquipamento';
import ControleInicialCalendarico from '../../../models/ControleInicialCalendarico';

const TabControlesIniciais = () => {
    const { id: nrEquipamento } = useParams();
    const [openDialogSomar, setOpenDialogSomar] = useState<boolean>(false);
    const [calendaricos, setCalendaricos] = useState<ControleInicialCalendarico[]>([])
    const [naoCalendaricos, setNaoCalendaricos] = useState<ControleEquipamento[]>([])
    const { sendRequest: sendNaoCalendaricosRequest, isLoading: naoCalendaricoIsLoading, error: errorNaoCalendarico } = useHttp();
    const { sendRequest: sendCalendaricosRequest, isLoading: calendaricoIsLoading, error: errorCalendarico } = useHttp();

    useEffect(() => {
        sendNaoCalendaricosRequest({ url: `aeronave/controle/${nrEquipamento}` }, (result: ControleEquipamento[]) => {
            setNaoCalendaricos(result);
        })

        sendCalendaricosRequest({ url: `aeronave/controle/calendarico/${nrEquipamento}` }, (result: ControleInicialCalendarico[]) => {
            setCalendaricos(result);
        })
    }, [])

    const onCloseDialogSomar = () => {
        setOpenDialogSomar(false);
    }

    return (<>
        {naoCalendaricoIsLoading || calendaricoIsLoading && (<LoadingCard />)}
        {!naoCalendaricoIsLoading && !calendaricoIsLoading && (<>
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
        </>)}
        <DialogSomar open={openDialogSomar} onClose={onCloseDialogSomar} />
    </>)
}

export default TabControlesIniciais;