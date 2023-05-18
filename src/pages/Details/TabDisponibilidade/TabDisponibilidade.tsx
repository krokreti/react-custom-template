import { Box } from '@mui/material';
import { PostAdd } from '@mui/icons-material';
import TableDisponibilidade from "./Tables/TableDisponibilidade";
import CustomButton from '../../../components/CustomButton';
import LoadingCard from '../../../components/LoadingCard';

const TabDisponibilidade = () => {
    return (
        // <Grow
        //     in={aeronave}
        //     unmountOnExit
        //     style={{ transformOrigin: '0 0 0' }}
        //     {...(aeronave ? { timeout: 1000 } : {})}
        // >
        <Box>
            {/* {isLoading && <LoadingCard />} */}
            <Box display={'flex'} gap={4} marginBottom={4}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                    <CustomButton onClick={() => { }} >{<PostAdd />}</CustomButton>
                    Novo
                </Box>
            </Box>
            <TableDisponibilidade />
        </Box>
        // </Grow>
    )
}

export default TabDisponibilidade