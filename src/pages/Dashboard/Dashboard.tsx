import { useEffect, useState } from "react";
import MainCard from "../../components/shared/MainCard";
import useHttp from "../../hooks/use-http";
import DashboardTable from "./DashboardTable";
import LoadingCard from "../../components/LoadingCard";
import EquipamentoAeronave from "../../models/EquipamentoAeronave";
import FlightIcon from '@mui/icons-material/Flight';
import ErrorCard from "../../components/ErrorCard";

const Dashboard = () => {
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave[]>([]);
    const { sendRequest: requestPosts, isLoading, error } = useHttp();

    useEffect(() => {
        requestPosts({ url: 'aeronaves/unidade/374' }, (data: EquipamentoAeronave[]) => {
            setEquipamentoAeronave(data);
            console.log(data);
        })
    }, [])

    return (<>
        <MainCard title={"Aeronaves"} startIcon={<FlightIcon color="primary" />}>
            {isLoading && <LoadingCard />}
            {!isLoading && error && (<ErrorCard message={error} />)}
            {!isLoading && !error && <DashboardTable aeronaves={equipamentoAeronave} />}
        </MainCard>
    </>)
}

export default Dashboard;