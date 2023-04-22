import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type DialogProps = {
    title?: string,
    content: React.ReactNode,
    actions: React.ReactNode,
    open: boolean,
    handleClose: () => void,
}

const CustomDialog: React.FC<DialogProps> = (props) => {
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    // {props.children}
    return (<Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        {props.title && (
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
        )}
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.content}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            {props.actions}
        </DialogActions>
    </Dialog>)
}

export default CustomDialog;