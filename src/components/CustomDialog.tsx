import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

type DialogProps = {
    title?: string,
    content: React.ReactNode,
    actions: React.ReactNode,
    open: boolean,
    handleClose: () => void,
}

const CustomDialog: React.FC<DialogProps> = (props, children) => {
    return (<Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        {props.title && (<>
            <DialogTitle id="alert-dialog-title">
                <Typography fontWeight={'bold'}>
                    {props.title}
                </Typography>
            </DialogTitle>
            <Divider />
        </>
        )}
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.content}
            </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
            {props.actions}
        </DialogActions>
    </Dialog>)
}

export default CustomDialog;