import { useState, useEffect } from 'react';
import CustomButton from '../../../../components/CustomButton';
import CustomDialog from "../../../../components/CustomDialog";

type Props = {
    open: boolean,
    onClose: () => void,
}

const DialogSomar: React.FC<Props> = (props) => {
    var content = <>Content</>
    var actions = <CustomButton variant='text' children={'Fechar'} onClick={props.onClose} />

    return (<CustomDialog title="Totais de Controles por Dia e Períodos" actions={actions} content={content} open={props.open} handleClose={props.onClose} />)
}

export default DialogSomar;