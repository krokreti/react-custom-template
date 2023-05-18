import TableConfiguracaoReal from "./Tables/TableConfiguracaoReal";
import TableItensForaConfiguracaoReal from "./Tables/TableItensForaConfiguracaoReal";
import FilterConfiguracaoReal from "./Filter/FilterConfiguraçãoReal";
import { Box, Stack } from '@mui/material';

const TabConfiguracaoReal = () => {
    return (
        <Box >
            <Stack direction="column" gap={4}>
                <FilterConfiguracaoReal />
                <TableConfiguracaoReal />
                <TableItensForaConfiguracaoReal />
            </Stack>
        </Box>)
}

export default TabConfiguracaoReal;