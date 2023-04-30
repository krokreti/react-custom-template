import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold'
    }
}))

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    teste1: number,
    teste2: number,
) {
    return { name, calories, fat, carbs, protein, teste1, teste2 };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1.0, 2.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2, 3),
    createData('Eclair', 262, 16.0, 24, 6.0, 3, 5),
    createData('Cupcake', 305, 3.7, 67, 4.3, 5, 7),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 7, 8),
];

const ControlesIniciaisTable = () => {
    const theme = useTheme();
    const [selectedRow, setSelectedRow] = useState<string>('');

    const onClickTableRow = (selectedRow: string) => {
        setSelectedRow(selectedRow)
    }

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
                {rows.map((row) => (
                    <TableRow
                        hover={true}
                        selected={selectedRow == row.name}
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        onClick={() => { onClickTableRow(row.name) }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="center">{row.teste1}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default ControlesIniciaisTable;