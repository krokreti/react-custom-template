import { Box, Grid } from '@mui/material';
import Input from '../../../components/Input';
import InputButton from '../../../components/InputButton';
import EquipamentoAeronave from '../../../models/EquipamentoAeronave';
import * as dayjs from 'dayjs'
import EditIcon from '@mui/icons-material/Edit';
import DialogCicloInspecao from './Dialogs/DialogCicloInspecao';
import DialogConfiguracaoPrimaria from './Dialogs/DialogConfiguracaoPrimaria';
import useHttp from '../../../hooks/use-http';
import { useEffect, useState } from 'react';
import TabelaManutencao from '../../../models/TabelaManutencao';
import ConfiguracaoPrimaria from '../../../models/ConfiguracaoPrimaria';

const TabDescricaoAeronave: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {
    const [openDialogCicloInspecao, setOpenDialogCicloInspecao] = useState<boolean>(false);
    const [openDialogConfiguracaoPrimaria, setOpenDialogConfiguracaoPrimaria] = useState<boolean>(false);
    const [listConfiguracaoPrimaria, setListConfiguracaoPrimaria] = useState<ConfiguracaoPrimaria[]>([]);
    const [listCicloInspecao, setListCicloInspecao] = useState<TabelaManutencao[]>([]);
    const { sendRequest: sendRequestCicloInspecao } = useHttp();
    const { sendRequest: sendRequestConfiguracaoPrimaria } = useHttp();

    if (aeronave) {
        useEffect(() => {
            sendRequestCicloInspecao({ url: `siloms/api/cicloinspecao/aeronave/ciclo/material/listar/${aeronave.CD_MATERIAL}` }, (result: TabelaManutencao[]) => {
                var index = result.findIndex((ciclo) => ciclo.CD_TABELA == aeronave.CD_TABELA);
                result.splice(index, 1);
                setListCicloInspecao(result);
            })
        }, [aeronave])
    }

    const onCloseCicloInspecaoDialog = () => {
        setOpenDialogCicloInspecao(false)
    }

    if (aeronave) {
        useEffect(() => {
            sendRequestConfiguracaoPrimaria({ url: `siloms/api/configuracaoprimaria/aeronave/configuracao/material/${aeronave.CD_MATERIAL}` }, (result: ConfiguracaoPrimaria[]) => {
                var index = result.findIndex((configuracao) => aeronave.DS_CONFIGURACAO == configuracao.DS_CONFIGURACAO)
                result.splice(index, 1);
                console.log(result)
                setListConfiguracaoPrimaria(result);
            })
        }, [aeronave])
    }

    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} >
            <Grid item xs={6} sm={4} md={3} >
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
            <Grid item xs={6} sm={4} md={3} >
                <Input
                    id='dtContrato'
                    label='Data Contrato'
                    type='text'
                    shrink
                    inputProps={{ readOnly: true }}
                    value={dayjs(aeronave?.DT_CONTRATO).format('DD/MM/YYYY')}
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
        <Grid container spacing={3} marginTop={2} >
            <Grid item xs={12} sm={4} md={5} >

                <InputButton icon={<EditIcon />} value={aeronave?.NM_TABELA} label='Ciclos Inspeções' onClick={() => { setOpenDialogCicloInspecao(true) }} />
            </Grid>
            <Grid item xs={12} sm={4} md={5} >

                <InputButton icon={<EditIcon />} value={aeronave?.DS_CONFIGURACAO} label='Configuração Primária' onClick={() => { }} />
            </Grid>
        </Grid>
        <Grid container spacing={3} marginTop={2} >
            <Grid item xs={12} sm={6} md={6} >
                <Input
                    id='observacoes'
                    label='Observações'
                    type='text'
                    multiline
                    rows={3}
                    shrink
                    inputProps={{ readOnly: true }}
                    value={aeronave?.TX_OBS}
                />
            </Grid>
        </Grid>
        <DialogCicloInspecao ciclos={listCicloInspecao} open={openDialogCicloInspecao} onClose={onCloseCicloInspecaoDialog} />
        <DialogConfiguracaoPrimaria />
    </Box>)
}

export default TabDescricaoAeronave;