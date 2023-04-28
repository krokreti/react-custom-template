import React, { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import MessageType from "../models/MessageType";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Message: React.FC<MessageType> = (props) => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (props.show) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [props.show])

    //rodar a funçao no componente pai para resetar o snackbar
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            props.clearHandler(false);
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            style={{ marginTop: '3em' }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Alert onClose={handleClose} severity={props.color} sx={{ width: '100%' }}>
                {props.text}
            </Alert>
        </Snackbar>
    )
}

export default Message;