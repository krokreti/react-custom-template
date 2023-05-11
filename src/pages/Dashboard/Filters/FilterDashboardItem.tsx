import { Paper, Typography, Stack } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Link } from "react-router-dom";

type FilterItem = {
    tipo?: string,
    matricula?: number,
    projeto?: string,
    pn?: string,
    nrEquipamento?: number,
}

const FilterDashboardItem: React.FC<FilterItem> = (props) => {

    const setColor = (disponibilidade?: string) => {
        switch (disponibilidade) {
            case 'S':
                return 'success';
            case 'N':
                return 'error';
            default:
                return 'grey';
        }
    }

    return (
        <Link to={`/detalhes-aeronave/${props.nrEquipamento}`} style={{ textDecoration: 'none', width: '100%' }}>
            <Paper
                sx={{
                    p: 2,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                elevation={4}>
                <FlightIcon color={setColor(props.tipo)} />
                <Stack direction={'row'} spacing={2}>
                    <Typography fontWeight="bold">{props.matricula}</Typography>
                    <Typography>{props.projeto}</Typography>
                    <Typography>{props.pn}</Typography>
                </Stack>
                <ZoomInIcon color={'primary'} />
            </Paper>
        </Link>
    )
}

export default FilterDashboardItem;