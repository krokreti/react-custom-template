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
import DeleteIcon from '@mui/icons-material/Delete';
import Diretiva from '../../../../models/Diretiva';
import CustomPaginator from '../../../../components/CustomPaginator';

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

const TableDiretivas: React.FC<DiretivasType> = (props) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "650px" }} >
                    <TableHead >
                        <TableRow>
                            <StyledTableCell align="center"><SettingsIcon /></StyledTableCell>
                            <StyledTableCell align="center">Publicação Técnica</StyledTableCell>
                            <StyledTableCell align="center">Título</StyledTableCell>
                            <StyledTableCell align="center">FADT</StyledTableCell>
                            <StyledTableCell align="center">Tarefa</StyledTableCell>
                            <StyledTableCell align="center">Unidade</StyledTableCell>
                            <StyledTableCell align="center">Data Cumprimento</StyledTableCell>
                            <StyledTableCell align="center">OS</StyledTableCell>
                            <StyledTableCell align="center">Responsável</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.diretiva.map((diretiva, index) => (
                            <TableRow
                                hover={true}
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <DeleteIcon color='error' />
                                </TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.UNIDADES?.SG_UNIDADE}</TableCell>
                                <TableCell align="center">{diretiva.DT_CUMPRIMENTO}</TableCell>
                                <TableCell align="center">{diretiva.NR_OS}</TableCell>
                                <TableCell align="center">{diretiva.NM_USER_UPDATE}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CustomPaginator totalPages={props.totalPages} currentPage={props.currentPage} onChangePage={props.changePageHandler} />
        </>
    )
}

export default TableDiretivas;