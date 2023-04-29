import { Box } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PrintIcon from '@mui/icons-material/Print';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CustomButton from '../../../components/CustomButton';
import ControlesIniciaisTable from "./ControlesIniciaisTable";

const TabControlesIniciais = () => {
    return (<>
        <Box display={'flex'} gap={4} marginBottom={4}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <CustomButton onClick={() => { }} >{<PostAddIcon />}</CustomButton>
                Somar
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <CustomButton onClick={() => { }} >{<PrintIcon />}</CustomButton>
                Imprimir
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <CustomButton onClick={() => { }} >{<FormatListNumberedIcon />}</CustomButton>
                Excel
            </Box>
        </Box>
        <ControlesIniciaisTable />
    </>)
}

export default TabControlesIniciais;