import { useState, useEffect } from 'react';
import CustomDialog from "../../../../components/CustomDialog";

type Props = {
    open: boolean,
    onClose: () => void,
}

const DialogSomar: React.FC<Props> = (props) => {
    var content = <>Content</>
    var actions = <>Actions</>

    return (<CustomDialog title="Somar Controles Iniciais" actions={actions} content={content} open={props.open} handleClose={props.onClose} />)
}

export default DialogSomar;