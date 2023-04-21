import { AlertColor } from '@mui/material/Alert';
interface MessageType {
    text: string,
    show: boolean,
    color: AlertColor
    clearHandler: Function,
}

export default MessageType