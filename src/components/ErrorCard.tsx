import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const ErrorCard: React.FC<{ message?: String }> = (props) => {
    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} padding={3}>
            <Typography variant='h6' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}> <WarningIcon color='error' /> Erro!</Typography>
            <Typography fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>Não foi possível acessar o servidor!</Typography>
            {props.message && (`Mensagem de erro: ${props.message}`)}
        </Box>)
}

export default ErrorCard;