import { Box } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CustomButton from '../../../components/CustomButton';
import ControlesIniciaisTable from "./ControlesIniciaisTable";
import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import DialogSomar from './Dialogs/DialogSomar';
import LoadingCard from '../../../components/LoadingCard';

const TabControlesIniciais = () => {
    const [openDialogSomar, setOpenDialogSomar] = useState<boolean>(false);
    const { sendRequest: sendControlesIniciaisRequest, isLoading: controlesIsLoading, error } = useHttp();

    useEffect(() => {
        sendControlesIniciaisRequest({ url: '' }, (result: any) => {
            console.log(result)
        })
    }, [])

    const onCloseDialogSomar = () => {
        setOpenDialogSomar(false);
    }

    return (<>
        <Box display={'flex'} gap={4} marginBottom={4}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                <CustomButton onClick={() => { setOpenDialogSomar(true) }} >{<PostAddIcon />}</CustomButton>
                Somar
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                <CustomButton onClick={() => { }} >{<PrintIcon />}</CustomButton>
                Imprimir
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                <CustomButton onClick={() => { }} >{<FormatListNumberedIcon />}</CustomButton>
                Excel
            </Box>
        </Box>

        {/* {controlesIsLoading && (<LoadingCard />)}
        {!controlesIsLoading && (<ControlesIniciaisTable />)} */}
        <ControlesIniciaisTable />
        <DialogSomar open={openDialogSomar} onClose={onCloseDialogSomar} />
    </>)
}

export default TabControlesIniciais;