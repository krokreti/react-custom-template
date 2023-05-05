import { useEffect, useState } from "react";
import MainCard from "../../components/shared/MainCard";
import useHttp from "../../hooks/use-http";
import DashboardTable from "./DashboardTable";
import LoadingCard from "../../components/LoadingCard";
import EquipamentoAeronave from "../../models/EquipamentoAeronave";
import FlightIcon from '@mui/icons-material/Flight';
import ErrorCard from "../../components/ErrorCard";

interface AeronavePaginada {
    docs: EquipamentoAeronave[],
    total: number,
    limit: number,
    page?: number,
    pages?: number
}

const Dashboard = () => {
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState<number | undefined>(10);
    const [perPage, setPerPage] = useState<number | undefined>(10);
    const { sendRequest: requestPosts, isLoading, error } = useHttp();

    useEffect(() => {
        requestPosts({ url: `aeronaves/unidade/apoiadora/374?page=${currentPage}&limit=${limit}` }, (data: AeronavePaginada) => {
            console.log(data)
            setEquipamentoAeronave(data.docs);
            setPerPage(data.pages);
        })
    }, [currentPage])

    const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    return (<>
        <MainCard title={"Aeronaves"} startIcon={<FlightIcon color="primary" />}>
            {isLoading && <LoadingCard />}
            {!isLoading && error && (<ErrorCard message={error} />)}
            {!isLoading && !error && <DashboardTable aeronaves={equipamentoAeronave} currentPage={currentPage} perPage={perPage} changePageHandler={onPageChange} />}
        </MainCard>
    </>)
}

export default Dashboard;