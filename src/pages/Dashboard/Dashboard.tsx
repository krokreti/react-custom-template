import MainCard from "../../components/shared/MainCard";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
    return (<>
        <MainCard title="Dashboard" >
            <DashboardTable />
        </MainCard>
    </>)
}

export default Dashboard;