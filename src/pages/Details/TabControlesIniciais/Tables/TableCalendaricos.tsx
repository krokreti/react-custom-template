import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ControleInicialCalendarico from '../../../../models/ControleInicialCalendarico';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold'
    }
}))


const TableCalendaricos: React.FC<{ controles: ControleInicialCalendarico[] }> = ({ controles }) => {
    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
            <TableHead >
                <TableRow>
                    <StyledTableCell align="center">Controle</StyledTableCell>
                    <StyledTableCell align="right">TSN Atual</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {controles.map((controle) => (
                    <TableRow
                        key={controle.CD_CONTROLE}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {controle.DS_CONTROLE}
                        </TableCell>
                        <TableCell component="th" scope="row" align="right">
                            {controle.VL_TSN}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default TableCalendaricos;