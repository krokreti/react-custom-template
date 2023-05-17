import { useEffect, useMemo, useState } from "react";
import MainCard from "../../components/shared/MainCard";
import useHttp from "../../hooks/use-http";
import DashboardTable from "./DashboardTable";
import LoadingCard from "../../components/LoadingCard";
import EquipamentoAeronave from "../../models/EquipamentoAeronave";
import FlightIcon from '@mui/icons-material/Flight';
import ErrorCard from "../../components/ErrorCard";
import FilterDashboard from "./Filters/FilterDashboard";
import { useAppSelector } from "../../hooks/redux-hooks";

interface AeronavePaginada {
    aeronaves: EquipamentoAeronave[],
    total: number,
    limit: number,
    page?: number,
    totalPages?: number
}

const Dashboard = () => {
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave[]>([]);
    const [filteredAeronaves, setFilteredAeronaves] = useState<readonly EquipamentoAeronave[]>([]);
    const [filterText, setFilterText] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    // TO DO
    const [limit, setLimit] = useState<number | undefined>(10);
    const [totalPages, setTotalPages] = useState<number | undefined>(10);
    const { sendRequest: requestAeronaves, isLoading, error } = useHttp();
    const { sendRequest: requestFilter, isLoading: loadingFilter } = useHttp();
    const unidade = useAppSelector(state => state.occupationArea.unidade);

    useEffect(() => {
        requestAeronaves({ url: `aeronaves/unidade/apoiadora/${unidade}?page=${currentPage}&limit=${limit}` }, (data: AeronavePaginada) => {
            console.log(data)
            setEquipamentoAeronave(data.aeronaves);
            setTotalPages(data.totalPages);
        })
    }, [currentPage])

    useEffect(() => {
        if (filterText.length >= 3) {
            requestFilter({ url: `aeronaves/unidade/apoiadora/filtro/${unidade}?filtro=${filterText.toString().toUpperCase()}` }, (data: EquipamentoAeronave[]) => {
                setFilteredAeronaves(data);
            });
        } else {
            setFilteredAeronaves([]);
        }
    }, [filterText]);

    const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    const onFilterChange = (inputValue: string) => {
        setFilterText(inputValue);
    }

    return (<>
        <MainCard title={"Aeronaves"} startIcon={<FlightIcon color="primary" />}>
            {isLoading && <LoadingCard />}
            {!isLoading && error && (<ErrorCard message={error} />)}
            {!isLoading && !error && <FilterDashboard aeronaves={filteredAeronaves} loading={loadingFilter} onChange={onFilterChange} />}
            {!isLoading && !error && <DashboardTable aeronaves={equipamentoAeronave} currentPage={currentPage} totalPages={totalPages} changePageHandler={onPageChange} />}
        </MainCard>
    </>)
}

export default Dashboard;