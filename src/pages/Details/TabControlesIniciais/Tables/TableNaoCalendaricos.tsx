import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as dayjs from 'dayjs';
import ControleEquipamento from '../../../../models/ControleEquipamento';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold'
    }
}))


const TableNaoCalendaricos: React.FC<{ controles: ControleEquipamento[] }> = ({ controles }) => {
    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
            <TableHead >
                <TableRow>
                    <StyledTableCell align="left">Controle</StyledTableCell>
                    <StyledTableCell align="right">TSN Calculado</StyledTableCell>
                    <StyledTableCell align="right">TSN Atual</StyledTableCell>
                    <StyledTableCell align="right">TSN Inicial</StyledTableCell>
                    <StyledTableCell align="right">TSO</StyledTableCell>
                    <StyledTableCell align="center">Data Inicial</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {controles.map((controle) => (
                    <TableRow
                        key={controle.DS_CONTROLE}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {controle.DS_CONTROLE}
                        </TableCell>
                        <TableCell align="right">{controle.VL_DESDE_NOVO}</TableCell>
                        <TableCell align="right">{controle.VL_DESDE_NOVO}</TableCell>
                        <TableCell align="right">{controle.VL_DESDE_NOVO_INICIAL}</TableCell>
                        <TableCell align="right">{controle.VL_TSO}</TableCell>
                        <TableCell align="center">{dayjs(controle.DT_INICIAL).format('DD/MM/YYYY')}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default TableNaoCalendaricos;