import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '../../components/Input';
import EquipamentoAeronave from '../../models/EquipamentoAeronave';
import FlightIcon from '@mui/icons-material/Flight';
import * as dayjs from 'dayjs'

const DetailsForm: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {
    var disp = aeronave?.DS_SITUACAO_ATUAL == 'DISPONÍVEL' ? 'green' : 'red';

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={2} >
                    <Input
                        id='matricula'
                        label='Matrícula'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.NR_MATRICULA}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={2} >
                    <Input
                        id='unidade'
                        label='Unidade'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.SG_UNIDADE}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='sn'
                        label='SN'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.NR_SERIE}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='projeto'
                        label='Projeto'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.CD_PROJETO}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='dtFabricacao'
                        label='Data Fabricação'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={dayjs(aeronave?.DT_FABRICACAO).format('DD/MM/YYYY')}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: 3 }}>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='pn'
                        label='PN'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.NR_PN}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='codemp'
                        label='CODEMP'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.CD_CODEMP}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='nomenclatura'
                        label='Nomenclatura'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.NM_BASICO}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='nsn'
                        label='NSN'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.NR_NSN}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={6} md={6} >
                    <Input
                        id='disponibilidade'
                        label='Disponibilidade'
                        type='text'
                        multiline
                        rows={3}
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.TX_DISPONIBILIDADE ?? ""}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} >
                    <Input
                        id='stAtual'
                        label='Situação Atual'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.DS_SITUACAO_ATUAL ?? ""}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={2} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'fit-content'}>
                    <Input
                        id='disp'
                        label='Disp.'
                        type='text'
                        shrink
                        inputProps={{ readOnly: true }}
                        value={aeronave?.VL_DISP_ITEM == null ? '' : aeronave?.VL_DISP_ITEM}
                    />
                    <FlightIcon style={{ color: disp }} sx={{ marginLeft: 3 }} />
                </Grid>

            </Grid>
        </Box>);
}

export default DetailsForm;