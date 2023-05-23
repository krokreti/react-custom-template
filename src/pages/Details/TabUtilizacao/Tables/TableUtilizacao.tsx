import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Diretiva from '../../../../models/Diretiva';
import CustomPaginator from '../../../../components/CustomPaginator';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold',
    }
}))

type DiretivasType = {
    diretiva: Diretiva[],
    totalPages?: number,
    currentPage: number,
    changePageHandler: (_event: React.ChangeEvent<unknown>, page: number) => void,
}

const TableUtilizacao: React.FC<DiretivasType> = (props) => {
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
                            <StyledTableCell align="center"><SettingsIcon /></StyledTableCell>
                            <StyledTableCell align="center">Data Utilização</StyledTableCell>
                            <StyledTableCell align="center">Hora Início</StyledTableCell>
                            <StyledTableCell align="center">Data Fim</StyledTableCell>
                            <StyledTableCell align="center">Hora Fim</StyledTableCell>
                            <StyledTableCell align="center">Unidade</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.diretiva.map((diretiva, index) => (
                            <TableRow
                                selected={selectedRow == diretiva.CD_TAREFA}
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => { onClickTableRow(diretiva.CD_TAREFA!.toString()) }}
                            >
                                <TableCell component="th" scope="row">
                                    <DeleteIcon color='error' />
                                </TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.UNIDADES?.SG_UNIDADE}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CustomPaginator totalPages={props.totalPages} currentPage={props.currentPage} onChangePage={props.changePageHandler} />
        </>
    )
}

export default TableUtilizacao;