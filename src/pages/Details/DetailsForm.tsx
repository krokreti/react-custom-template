import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '../../components/Input';
import EquipamentoAeronave from '../../models/EquipamentoAeronave';
import FlightIcon from '@mui/icons-material/Flight';

const DetailsForm: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {
    // var disp = aeronave?.DS_SITUACAO_ATUAL == 'DI' ? 'success' : 'error';


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container gap={3}>
                <Grid item xs={5} sm={1} >
                    <Input
                        id='matricula'
                        label='Matrícula'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.NR_MATRICULA}
                    />
                </Grid>
                <Grid item xs={6} sm={1} >
                    <Input
                        id='unidade'
                        label='Unidade'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.SG_UNIDADE}
                    />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Input
                        id='sn'
                        label='SN'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.NR_SERIE}
                    />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Input
                        id='projeto'
                        label='Projeto'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.CD_PROJETO}
                    />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Input
                        id='dtFabricacao'
                        label='Data Fabricação'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.DT_FABRICACAO}
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Input
                        id='pn'
                        label='PN'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.NR_PN}
                    />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Input
                        id='codemp'
                        label='CODEMP'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.CD_CODEMP}
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Input
                        id='nomenclatura'
                        label='Nomenclatura'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.NM_BASICO}
                    />
                </Grid>
                <Grid item xs={12} sm={2} >
                    <Input
                        id='nsn'
                        label='NSN'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.NR_NSN}
                    />
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Input
                        id='disponibilidade'
                        label='Disponibilidade'
                        type='text'
                        disabled
                        multiline
                        rows={3}
                        shrink
                        value={aeronave?.TX_DISPONIBILIDADE}
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Input
                        id='stAtual'
                        label='Situação Atual'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.DS_SITUACAO_ATUAL}
                    />
                </Grid>
                <Grid item xs={12} sm={2} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'fit-content'}>
                    <Input
                        id='disp'
                        label='Disp.'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.VL_DISP_ITEM}
                    />
                    <FlightIcon color='success' sx={{ marginLeft: 3 }} />
                </Grid>

            </Grid>
        </Box>);
}

export default DetailsForm;