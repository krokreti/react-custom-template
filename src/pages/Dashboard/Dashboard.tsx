import MainCard from "../../components/shared/MainCard";
import DashboardTable from "./DashboardTable";
import TabComponent from "../../components/TabComponent";

const Dashboard = () => {
    return (<>
        <MainCard title="Dashboard" >
            <DashboardTable />
        </MainCard>

        <TabComponent />
    </>)
}

export default Dashboard;