import CustomButton from "../../../components/CustomButton";
import { Box } from '@mui/material';
import Message from "../../../components/Message";
import { useState } from 'react';

const SecondComponent = () => {
    const [showMessage, setShowMessage] = useState<boolean>(false);

    const handleMessage = () => {
        setShowMessage(!showMessage);
    }

    return (<Box display={"flex"} flexDirection={"column"}>
        Segunda Tab
        <CustomButton onClick={handleMessage}  >
            Ver Mensagem
        </CustomButton>
        <Message color="success" show={showMessage} text="Mostrando mensagem..." clearHandler={setShowMessage} />
    </Box>
    )
}

export default SecondComponent;