import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import IconButton from '@mui/material/IconButton';
import EquipamentoAeronave from '../../models/EquipamentoAeronave';
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const DashboardTable: React.FC<{ aeronaves: EquipamentoAeronave[] }> = ({ aeronaves }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Id</StyledTableCell>
                        <StyledTableCell align="center">Sit</StyledTableCell>
                        <StyledTableCell align="center">Tipo</StyledTableCell>
                        <StyledTableCell align="center">Matr.</StyledTableCell>
                        <StyledTableCell align="center">Proj.</StyledTableCell>
                        <StyledTableCell align="center">PN</StyledTableCell>
                        <StyledTableCell align="center">Uni.</StyledTableCell>
                        <StyledTableCell align="center">IPLR</StyledTableCell>
                        <StyledTableCell align="center">AIFP</StyledTableCell>
                        <StyledTableCell align="center">TSN</StyledTableCell>
                        <StyledTableCell align="center">Próx Inspeção</StyledTableCell>
                        <StyledTableCell align="center">Insp</StyledTableCell>
                        <StyledTableCell align="center">Disp</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {aeronaves.map((aeronave) => (
                        <StyledTableRow key={aeronave.NR_EQUIPAMENTO}>
                            <StyledTableCell component="th" scope="row" >
                                <Link to={`/detalhes-aeronave/${aeronave.NR_EQUIPAMENTO}`} key={aeronave.NR_EQUIPAMENTO} style={{ textDecoration: 'none' }}>
                                    <IconButton color="primary">
                                        <ZoomInIcon />
                                    </IconButton>
                                </Link>
                            </StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.DS_SITUACAO_ATUAL}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.IN_SITUACAO_ATUAL}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.NR_MATRICULA}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.SG_PROJETO}</StyledTableCell>
                            <StyledTableCell align="right" >{aeronave.NR_PN}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.SG_UNIDADE}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.QT_IPLR}</StyledTableCell>
                            <StyledTableCell align="right" >{aeronave.QT_AIFP}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.HR_TSN}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.DT_VENC_ITEM}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.SG_INSPECAO_ITEM}</StyledTableCell>
                            <StyledTableCell align="left" >{aeronave.DT_VENC_ITEM}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DashboardTable;