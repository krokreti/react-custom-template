import { useEffect, useState } from "react";
import MainCard from "../../components/shared/MainCard";
import useHttp from "../../hooks/use-http";
import DashboardTable from "./DashboardTable";
import Post from '../../models/Post';
import LoadingCard from "../../components/LoadingCard";

const Dashboard = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const { sendRequest: requestPosts, isLoading } = useHttp();

    useEffect(() => {
        requestPosts({ url: 'https://jsonplaceholder.typicode.com/posts' }, (data: Post[]) => {
            setPosts(data);
        })
    }, [])

    return (<>
        <MainCard title="Dashboard" >
            {isLoading && <LoadingCard />}
            {!isLoading && <DashboardTable posts={posts} />}
        </MainCard>
    </>)
}

export default Dashboard;