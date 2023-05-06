import { Grid } from '@mui/material';
import Input from "../../../components/Input";
import EquipamentoAeronave from '../../../models/EquipamentoAeronave';
import { numberToCurrency } from '../../../components/helpers/NumberToCurrency';

const TabPatrimonio: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {

    return (<>
        <Grid container spacing={3} marginTop={2} >
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='nrPatrimonio'
                    label='N° Patrimônio'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.NR_PATRIMONIO ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='classe'
                    label='Classe'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.DS_CLASSE_PAT ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='vlAquisicao'
                    label='Valor Aquisição'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={numberToCurrency(aeronave?.VL_AQUISICAO) ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='vlAtualizado'
                    label='Valor Atualizado'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={numberToCurrency(aeronave?.VL_ATUALIZADO) ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='vdUtil'
                    label='Vida Útil(meses)'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.VL_VIDA_UTIL ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='vlMensal'
                    label='Valor Mensal'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={numberToCurrency(aeronave?.VL_DEPRECIACAO_MES) ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='vlDepreciacao'
                    label='% Depreciação'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.VL_PERC_RESIDUAL ?? ''}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input
                    id='vlResidual'
                    label='Vida Residual'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.VL_RESIDUAL ?? ''}
                />
            </Grid>
        </Grid>
    </>)
}

export default TabPatrimonio;