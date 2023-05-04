import TableManutencoesRealizadas from "./Tables/TableManutencoesRealizadas";
import TableTipoControle from "./Tables/TableTipoControle";
import { Grid } from '@mui/material';

const TabManutencoesRealizadas = () => {
    return (<Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={9} >
            <TableManutencoesRealizadas />
        </Grid>
        <Grid item xs={12} sm={12} md={3} >
            <TableTipoControle />
        </Grid>
    </Grid>)
}

export default TabManutencoesRealizadas;