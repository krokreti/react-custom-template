import { useEffect, useState } from 'react';
import CustomDialog from "../../../components/CustomDialog";
import CustomButton from "../../../components/CustomButton";
import { Box } from '@mui/material';
import { useParams } from "react-router-dom";
import useHttp from '../../../hooks/use-http';
import EquipamentoAeronave from '../../../models/EquipamentoAeronave';

const FirstComponent = () => {
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave>();
    const { sendRequest, isLoading, error } = useHttp();
    const params = useParams();

    useEffect(() => {
        sendRequest({ url: `http://localhost:3000/siloms/api/aeronave/${params.id}` }, (data: EquipamentoAeronave) => {
            setEquipamentoAeronave(data);
            console.log(data);
        })
    }, [])

    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const dialogHandler = () => {
        setOpenDialog(true);
    }

    const dialogContent = (
        <>
            <p>Gostaria de confirmar esta dialog?</p>
        </>
    );

    const dialogActions = (
        <>
            <CustomButton onClick={handleCloseDialog} color='secondary' variant='text'>Cancel</CustomButton>
            <CustomButton onClick={handleCloseDialog} >Confirm</CustomButton>
        </>
    );

    return (<Box display={'flex'} flexDirection={'column'} gap={4}>
        Primeiro Componente
        <CustomButton onClick={dialogHandler}>
            Abrir Dialog
        </CustomButton>
        <CustomDialog open={openDialog} title='Tem certeza?' handleClose={handleCloseDialog} actions={dialogActions} content={dialogContent} />
    </Box>)
}

export default FirstComponent;
