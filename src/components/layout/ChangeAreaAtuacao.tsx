import CustomButton from "../CustomButton";
import EngineeringIcon from '@mui/icons-material/Engineering';

const ChangeAreaAtuacao = () => {
    return (
        <CustomButton
            onClick={() => { }}
            color="secondary"
            variant="text"
            startIcon={<EngineeringIcon />}
            sx={{ mr: 3 }}>
            Área de Atuação
        </CustomButton>)
}

export default ChangeAreaAtuacao;