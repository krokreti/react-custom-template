import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
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
    teste3: number,
    teste4: number,
) {
    return { name, calories, fat, carbs, protein, teste1, teste2, teste3, teste4 };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1.0, 2.0, 1, 2,),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2, 3, 1, 2),
    createData('Eclair', 262, 16.0, 24, 6.0, 3, 5, 1, 2),
    createData('Cupcake', 305, 3.7, 67, 4.3, 5, 7, 1, 2),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 7, 8, 1, 2),
];

const TableDiretivas = () => {
    const [selectedRow, setSelectedRow] = useState<string>('');

    const onClickTableRow = (selectedRow: string) => {
        setSelectedRow(selectedRow)
    }

    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: "650px" }} >
            <TableHead >
                <TableRow>
                    <StyledTableCell align="center">Ciclo</StyledTableCell>
                    <StyledTableCell align="center">N° Seq</StyledTableCell>
                    <StyledTableCell align="center">Sigla Insp</StyledTableCell>
                    <StyledTableCell align="center">Data Início</StyledTableCell>
                    <StyledTableCell align="center">Data Fim</StyledTableCell>
                    <StyledTableCell align="center">Unidade</StyledTableCell>
                    <StyledTableCell align="center">Setor</StyledTableCell>
                    <StyledTableCell align="center">OS</StyledTableCell>
                    <StyledTableCell align="center">Ofic Externa</StyledTableCell>
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
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                        <TableCell align="center">{row.protein}</TableCell>
                        <TableCell align="center">{row.teste1}</TableCell>
                        <TableCell align="center">{row.teste2}</TableCell>
                        <TableCell align="center">{row.teste3}</TableCell>
                        <TableCell align="center">{row.teste4}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default TableDiretivas;