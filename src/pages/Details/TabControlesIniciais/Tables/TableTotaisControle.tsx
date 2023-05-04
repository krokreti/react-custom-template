import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ControlePeriodo from '../../../../models/ControlePeriodo';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold'
    }
}))


const TableTotaisControle: React.FC<{ controles: ControlePeriodo[] }> = ({ controles }) => {


    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} >
            <TableHead >
                <TableRow>
                    <StyledTableCell align="left">Controle</StyledTableCell>
                    <StyledTableCell align="right">TSN Calculado</StyledTableCell>
                    <StyledTableCell align="right">Total do Dia</StyledTableCell>
                    <StyledTableCell align="right">Total até</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {controles.map((controle) => (
                    <TableRow
                        hover={true}
                        key={controle.DS_CONTROLE}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {controle.DS_CONTROLE}
                        </TableCell>
                        <TableCell align="right">{controle.VL_CALCULADO_TOTAL}</TableCell>
                        <TableCell align="right">{controle.VL_CALCULADO_DIA}</TableCell>
                        <TableCell align="right">{controle.VL_CALCULADO_ATE}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default TableTotaisControle;