import CustomButton from "../CustomButton";
import EngineeringIcon from '@mui/icons-material/Engineering';

type Props = {
    onClickHandler: () => void
}

const ChangeAreaAtuacao: React.FC<Props> = (props) => {

    return (
        <CustomButton
            onClick={() => { props.onClickHandler() }}
            color="secondary"
            variant="text"
            startIcon={<EngineeringIcon />}
            sx={{ mr: 3 }}>
            Área de Atuação
        </CustomButton>)
}

export default ChangeAreaAtuacao;