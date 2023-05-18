import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import CustomPaginator from '../../../../components/CustomPaginator';

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
    teste5: number,
) {
    return { name, calories, fat, carbs, protein, teste1, teste2, teste3, teste4, teste5 };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1.0, 2.0, 1, 2, 8),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 2, 3, 1, 2, 9),
    createData('Eclair', 262, 16.0, 24, 6.0, 3, 5, 1, 2, 10),
    createData('Cupcake', 305, 3.7, 67, 4.3, 5, 7, 1, 2, 110),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 7, 8, 1, 2, 1),
];

type ItensForaType = {
    // aeronaves: EquipamentoAeronave[],
    totalPages?: number,
    currentPage: number,
    changePageHandler: (_event: React.ChangeEvent<unknown>, page: number) => void,
}

const TableItensForaConfiguracaoReal = () => {
    const [selectedRow, setSelectedRow] = useState<string>('');

    const onClickTableRow = (selectedRow: string) => {
        setSelectedRow(selectedRow)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "650px" }} >
                    <TableHead >
                        <TableRow>
                            <StyledTableCell align="center" sx={{ display: 'flex', justifyContent: 'center' }}><SettingsIcon /></StyledTableCell>
                            <StyledTableCell align="center">Seq</StyledTableCell>
                            <StyledTableCell align="center">PN</StyledTableCell>
                            <StyledTableCell align="center">CODEMP</StyledTableCell>
                            <StyledTableCell align="center">SN</StyledTableCell>
                            <StyledTableCell align="center">Nomenclatura</StyledTableCell>
                            <StyledTableCell align="center">Posição</StyledTableCell>
                            <StyledTableCell align="center">Lote</StyledTableCell>
                            <StyledTableCell align="center">Sistema</StyledTableCell>
                            <StyledTableCell align="center">WUC</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                hover={true}
                                selected={selectedRow == row.name}
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => { onClickTableRow(row.name) }}
                            >
                                {index == 0 && (
                                    <TableCell component="th" scope="row" align="center">
                                        <IconButton>
                                            <AddCircleIcon color={'success'} />
                                        </IconButton>
                                    </TableCell>
                                )}
                                {index > 0 && (
                                    <TableCell component="th" scope="row" align="center">
                                        <IconButton>
                                            <RemoveCircleIcon color={'error'} />
                                        </IconButton>
                                    </TableCell>
                                )}
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                                <TableCell align="center">{row.teste1}</TableCell>
                                <TableCell align="center">{row.teste2}</TableCell>
                                <TableCell align="center">{row.teste3}</TableCell>
                                <TableCell align="center">{row.teste4}</TableCell>
                                <TableCell align="center">{row.teste5}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <CustomPaginator totalPages={totalPages} currentPage={currentPage} onChangePage={changePageHandler} /> */}
        </>
    )
}

export default TableItensForaConfiguracaoReal;