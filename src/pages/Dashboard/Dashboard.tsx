import { useEffect, useState } from "react";
import MainCard from "../../components/shared/MainCard";
import useHttp from "../../hooks/use-http";
import DashboardTable from "./DashboardTable";
import LoadingCard from "../../components/LoadingCard";
import EquipamentoAeronave from "../../models/EquipamentoAeronave";
import FlightIcon from '@mui/icons-material/Flight';

const Dashboard = () => {
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave[]>([]);
    const { sendRequest: requestPosts, isLoading } = useHttp();

    useEffect(() => {
        requestPosts({ url: 'http://localhost:3000/aeronaves/unidade/374' }, (data: EquipamentoAeronave[]) => {
            setEquipamentoAeronave(data);
            console.log(data);
        })
    }, [])

    return (<>
        <MainCard title={"Aeronaves"} startIcon={<FlightIcon />}>
            {isLoading && <LoadingCard />}
            {!isLoading && <DashboardTable aeronaves={equipamentoAeronave} />}
        </MainCard>
    </>)
}

export default Dashboard;