import { useState } from 'react';
import CustomDialog from "../../../components/CustomDialog";
import CustomButton from "../../../components/CustomButton";
import { Box } from '@mui/material';

const FirstComponent = () => {
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
