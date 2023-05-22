import FlightIcon from '@mui/icons-material/Flight';
import { Typography, Stack } from '@mui/material';

const DashboardInfo = () => {
    return (
        <Stack
            mb={{ sx: 1, sm: 3 }}
            direction={{ sx: 'column', md: 'row' }}
            display={'flex'}
            justifyContent={'center'}
            width={'100%'}
            gap={{ sm: 3, md: 5 }}
            borderRadius={2}
            boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
        >
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={1} p={1.3} >
                <FlightIcon color={'success'} />
                <Typography sx={{ flex: '1 1 100%' }}
                    variant="h6">
                    Disponível
                </Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={1} p={1.3} >
                <FlightIcon color={'error'} />
                <Typography sx={{ flex: '1 1 100%' }}
                    variant="h6" >
                    Indisponível
                </Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={1} p={1.3} >
                <FlightIcon color={'disabled'} />
                <Typography sx={{ flex: '1 1 100%' }}
                    variant="h6" >
                    Aguardando Descarga
                </Typography>
            </Stack>
        </Stack>)
}

export default DashboardInfo;