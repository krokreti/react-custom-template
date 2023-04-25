import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import Input from '../../../components/Input';
import EquipamentoAeronave from '../../../models/EquipamentoAeronave';
import * as dayjs from 'dayjs'

const TabDescricaoAeronave: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {

    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container gap={3} spacing={2}>
            <Grid item xs={5} sm={4} md={2} >
                <Input
                    id='dtFabricacao'
                    label='Data Fabricação'
                    type='text'
                    disabled
                    shrink
                    value={dayjs(aeronave?.DT_FABRICACAO).format('DD/MM/YYYY')}
                />

            </Grid>
            <Grid item xs={6} sm={4} md={2} >
                <Input
                    id='dtRecebimento'
                    label='Data Recebimento'
                    type='text'
                    disabled
                    shrink
                    value={dayjs(aeronave?.DT_RECEBIMENTO).format('DD/MM/YYYY')}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <Input
                    id='nrContrato'
                    label='N° Contrato'
                    type='text'
                    disabled
                    shrink
                    value={aeronave?.NR_CONTRATO}
                />
            </Grid>
            <Grid item xs={5} sm={4} md={2} >
                <Input
                    id='dtContrato'
                    label='Data Contrato'
                    type='text'
                    disabled
                    shrink
                    value={aeronave?.DT_CONTRATO}
                />
            </Grid>
            <Grid item xs={6} sm={4} md={2} >
                <Input
                    id='tpAbastecimento'
                    label='Tipo Abastecimento'
                    type='text'
                    disabled
                    shrink
                    value={aeronave?.TP_ABASTECIMENTO}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={2} >
                <Input
                    id='preco'
                    label='Preço'
                    type='text'
                    disabled
                    shrink
                    value={aeronave?.VL_PRECO_EQP}
                />
            </Grid>
        </Grid>
        <Grid container gap={3} spacing={2}>
            {/* teste */}
        </Grid>
    </Box>)
}

export default TabDescricaoAeronave;