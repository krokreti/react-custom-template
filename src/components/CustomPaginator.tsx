import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginatorType = {
    totalPages?: number,
    currentPage: number,
    onChangePage: (_event: React.ChangeEvent<unknown>, page: number) => void,
}

const CustomPaginator: React.FC<PaginatorType> = ({ totalPages, currentPage, onChangePage }) => {
    return (<Stack spacing={2} marginTop={4} display={'flex'} direction="row" justifyContent="center">
        <Pagination color={'primary'} count={totalPages} page={currentPage} onChange={onChangePage} />
    </Stack>);
}

export default CustomPaginator;