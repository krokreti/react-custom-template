import { Box, Typography, Card } from '@mui/material';

const Footer = () => {
    return (
        <Card elevation={6}>
            <Box width={'100%'} display={'flex'} justifyContent={'center'} bgcolor={'#FFF'} padding={5} borderTop={'1px solid #ebe8e8'}>
                <Typography variant='body1' sx={{ display: "flex", alignItems: "center" }}>Manutenção de Aeronaves</Typography>
            </Box>
        </Card>
    )
}

export default Footer;