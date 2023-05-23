import { Box } from '@mui/material';
import { PostAdd } from '@mui/icons-material';
import CustomButton from '../../../components/CustomButton';
import TableDiretivas from "./Tables/TableDiretivas";
import LoadingCard from '../../../components/LoadingCard';
import Grow from '@mui/material/Grow';
import useHttp from '../../../hooks/use-http';
import { useEffect, useState } from 'react';
import Diretiva from '../../../models/Diretiva';
import { useParams } from 'react-router';
import ErrorCard from '../../../components/ErrorCard';

type DireitivasPaginadas = {
    diretiva: Diretiva[],
    page?: number,
    totalCount?: number,
    totalPages?: number
}

const TabDiretivas = () => {
    const { sendRequest, error, isLoading } = useHttp();
    const [diretivas, setDiretivas] = useState<Diretiva[]>([]);
    const [totalPages, setTotalPages] = useState<number | undefined>(10);
    const [currentPage, setCurrentPage] = useState(1);
    //TO DO
    const [limit, _setLimit] = useState<number | undefined>(10);
    const { id } = useParams();

    useEffect(() => {
        sendRequest({ url: `equipamento/diretiva/lista/${id}?page=${currentPage}&limit=${limit}` }, (response: DireitivasPaginadas) => {
            console.log(response);
            setDiretivas(response.diretiva);
            setTotalPages(response.totalPages);
        })
    }, [])

    const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    return (
        <>
            {isLoading && <LoadingCard />}
            {!isLoading && error && (<ErrorCard message={error} />)}
            {!isLoading && !error && (
                <Grow
                    in={diretivas.length > 0}
                    unmountOnExit
                    style={{ transformOrigin: '0 0 0' }}
                    {...(diretivas ? { timeout: 1000 } : {})}
                >
                    <Box>
                        <Box display={'flex'} gap={4} marginBottom={4}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
                                <CustomButton onClick={() => { }} >{<PostAdd />}</CustomButton>
                                Novo
                            </Box>
                        </Box>

                        <TableDiretivas diretiva={diretivas} totalPages={totalPages} currentPage={currentPage} changePageHandler={onPageChange} />
                    </Box>
                </Grow>
            )}
        </>
    )
}

export default TabDiretivas;