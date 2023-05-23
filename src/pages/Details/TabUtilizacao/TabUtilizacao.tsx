import { useEffect, useState } from "react";
import useHttp from "../../../hooks/use-http";
import { useParams } from "react-router";


const TabUtilizacao = () => {
    const [totalPages, setTotalPages] = useState<number | undefined>(10);
    const [currentPage, setCurrentPage] = useState(1);
    //TO DO
    const [limit, _setLimit] = useState<number | undefined>(10);
    const { id } = useParams();

    const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    return (<>Tab Utilizacao</>)
}

export default TabUtilizacao;