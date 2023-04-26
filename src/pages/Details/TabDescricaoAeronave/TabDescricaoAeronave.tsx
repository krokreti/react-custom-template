import { Box, Grid } from '@mui/material';
import Input from '../../../components/Input';
import InputButton from '../../../components/InputButton';
import EquipamentoAeronave from '../../../models/EquipamentoAeronave';
import * as dayjs from 'dayjs'
import EditIcon from '@mui/icons-material/Edit';

const TabDescricaoAeronave: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {

    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container gap={3} spacing={2} >
            <Grid item xs={5} sm={4} md={3} >
                <Input
                    id='dtFabricacao'
                    label='Data Fabricação'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={dayjs(aeronave?.DT_FABRICACAO).format('DD/MM/YYYY')}
                />

            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Input
                    id='dtRecebimento'
                    label='Data Recebimento'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={dayjs(aeronave?.DT_RECEBIMENTO).format('DD/MM/YYYY')}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Input
                    id='nrContrato'
                    label='N° Contrato'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.NR_CONTRATO}
                />
            </Grid>
            <Grid item xs={5} sm={4} md={3} >
                <Input
                    id='dtContrato'
                    label='Data Contrato'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.DT_CONTRATO}
                />
            </Grid>
            <Grid item xs={6} sm={4} md={3} >
                <Input
                    id='tpAbastecimento'
                    label='Tipo Abastecimento'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.TP_ABASTECIMENTO}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} >
                <Input
                    id='preco'
                    label='Preço'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.VL_PRECO_EQP}
                />
            </Grid>
        </Grid>
        <Grid container gap={3} spacing={2} marginTop={3} >
            <Grid item xs={12} sm={4} md={5} >

                <InputButton icon={<EditIcon />} value='TESTE' label='Ciclos Inspeções' onClick={() => { }} />
            </Grid>
            <Grid item xs={12} sm={4} md={5} >

                <InputButton icon={<EditIcon />} value='TESTE' label='Configuração Primária' onClick={() => { }} />
            </Grid>
        </Grid>
        <Grid container gap={3} spacing={2} marginTop={3} >
            <Grid item xs={12} sm={6} md={6} >
                <Input
                    id='disponibilidade'
                    label='Disponibilidade'
                    type='text'
                    multiline
                    rows={3}
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.TX_DISPONIBILIDADE}
                />
            </Grid>
        </Grid>
    </Box>)
}

export default TabDescricaoAeronave;