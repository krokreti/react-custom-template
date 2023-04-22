import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingCard = () => {
    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <CircularProgress />
        </Box>
    )
}

export default LoadingCard;