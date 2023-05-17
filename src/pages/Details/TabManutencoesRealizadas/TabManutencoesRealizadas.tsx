import TableManutencoesRealizadas from "./Tables/TableManutencoesRealizadas";
import TableTipoControle from "./Tables/TableTipoControle";
import { Grid } from '@mui/material';
import useHttp from "../../../hooks/use-http";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import HistoricoManutencao from "../../../models/HistoricoManutencao";

interface HistoricoPaginado {
    historicoManutencao: HistoricoManutencao[],
    total: number,
    limit: number,
    page?: number,
    totalPages?: number
}

const TabManutencoesRealizadas = () => {
    const { id: nrEquipamento } = useParams();
    const { sendRequest: buscarHistorico, isLoading } = useHttp();
    const [historicoManutencao, setHistoricoManutencao] = useState<HistoricoManutencao[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState<number | undefined>(10);
    const [totalPages, setTotalPages] = useState<number | undefined>(10);

    useEffect(() => {
        buscarHistorico({ url: `aeronave/manutencao/historico/${nrEquipamento}?page=${currentPage}&limit=${limit}` }, (response: HistoricoPaginado) => {
            setHistoricoManutencao(response.historicoManutencao);
            setTotalPages(response.totalPages);
            console.log(response)
        })
    }, [])

    const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    return (<Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={9} >
            {/* <TableManutencoesRealizadas historicoManutencao={historicoManutencao} changePageHandler={onPageChange} currentPage={currentPage} totalPages={totalPages} /> */}
        </Grid>
        <Grid item xs={12} sm={12} md={3} >
            <TableTipoControle />
        </Grid>
    </Grid>)
}

export default TabManutencoesRealizadas;