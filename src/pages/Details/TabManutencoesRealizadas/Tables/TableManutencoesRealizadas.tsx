import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomPaginator from '../../../../components/CustomPaginator';
import HistoricoManutencao from '../../../../models/HistoricoManutencao';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold'
    }
}))

type Props = {
    historicoManutencao: HistoricoManutencao[],
    totalPages?: number,
    currentPage: number,
    changePageHandler: (_event: React.ChangeEvent<unknown>, page: number) => void,
}

const TableManutencoesRealizadas: React.FC<Props> = ({ totalPages, changePageHandler, currentPage, historicoManutencao }) => {
    const [selectedRow, setSelectedRow] = useState<string>('');

    const onClickTableRow = (selectedRow: string | undefined) => {
        setSelectedRow(selectedRow!)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: "100%" }} >
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
                        {historicoManutencao.map((historico) => (
                            <TableRow
                                hover={true}
                                selected={selectedRow == historico.NR_OS?.toString()}
                                key={historico.NR_OS}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => { onClickTableRow(historico.NR_OS?.toString()) }}
                            >
                                <TableCell component="th" scope="row">
                                    {historico.CD_TABELA}
                                </TableCell>
                                <TableCell align="center">{historico.NR_SEQUENCIA}</TableCell>
                                <TableCell align="center">{`${historico.TP_REFERENCIA} ${historico.NR_SEQ_LOGICA}`}</TableCell>
                                <TableCell align="center">{historico.DT_INICIO_MANUTENCAO}</TableCell>
                                <TableCell align="center">{historico.DT_FIM_MANUTENCAO}</TableCell>
                                <TableCell align="center">{historico.SG_UNIDADE}</TableCell>
                                <TableCell align="center">{historico.SG_SETOR}</TableCell>
                                <TableCell align="center">{historico.NR_OS}</TableCell>
                                <TableCell align="center">-</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CustomPaginator currentPage={currentPage} totalPages={totalPages} onChangePage={changePageHandler} />
        </>
    )
}

export default TableManutencoesRealizadas;