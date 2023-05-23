import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Diretiva from '../../../../models/Diretiva';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold',
    }
}))

type DiretivasType = {
    diretiva: Diretiva[],
}

const TableUtilizacaoTipoControle: React.FC<DiretivasType> = (props) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "650px" }} >
                    <TableHead >
                        <TableRow>
                            <StyledTableCell align="center">Tipo de Controle</StyledTableCell>
                            <StyledTableCell align="center">Valor</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.diretiva.map((diretiva, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                                <TableCell align="center">{diretiva.CD_FADT}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableUtilizacaoTipoControle;