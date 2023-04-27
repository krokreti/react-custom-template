import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Input from '../../../components/Input';
import InputButton from '../../../components/InputButton';
import EquipamentoAeronave from '../../../models/EquipamentoAeronave';
import * as dayjs from 'dayjs'
import EditIcon from '@mui/icons-material/Edit';
import DialogCicloInspecao from './Dialogs/DialogCicloInspecao';
import DialogConfiguracaoPrimaria from './Dialogs/DialogConfiguracaoPrimaria';
import useHttp from '../../../hooks/use-http';
import TabelaManutencao from '../../../models/TabelaManutencao';
import ConfiguracaoPrimaria from '../../../models/ConfiguracaoPrimaria';
import Message from '../../../components/Message';
import { AlertColor } from '@mui/material/Alert';

const TabDescricaoAeronave: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {
    const [openDialogCicloInspecao, setOpenDialogCicloInspecao] = useState<boolean>(false);
    const [openDialogConfiguracaoPrimaria, setOpenDialogConfiguracaoPrimaria] = useState<boolean>(false);
    const [listConfiguracaoPrimaria, setListConfiguracaoPrimaria] = useState<ConfiguracaoPrimaria[]>([]);
    const [listCicloInspecao, setListCicloInspecao] = useState<TabelaManutencao[]>([]);
    const [filteredListCicloInspecao, setFilteredListCicloInspecao] = useState<TabelaManutencao[]>([])
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [color, setColor] = useState<AlertColor>('success');
    const [selectedCicloInspecao, setSelectedCicloInspecao] = useState<string | undefined>(aeronave?.NM_TABELA);
    const [selectedConfiguracaoInspecao, setSelectedConfiguracaoInspecao] = useState<string | undefined>(aeronave?.DS_CONFIGURACAO);
    const { sendRequest: sendRequestCicloInspecao } = useHttp();
    const { sendRequest: sendRequestConfiguracaoPrimaria } = useHttp();
    const { sendRequest: saveCicloInspecao, isLoading: isLoadingCicloInspecao } = useHttp();
    const { sendRequest: saveConfiguracaoPrimaria, isLoading: isLoadingConfiguracaoPrimaria } = useHttp();

    if (aeronave) {
        useEffect(() => {
            sendRequestCicloInspecao({ url: `siloms/api/cicloinspecao/aeronave/ciclo/material/listar/${aeronave.CD_MATERIAL}` }, (result: TabelaManutencao[]) => {
                var filteredArray = result.filter((ciclo) => { return ciclo.CD_TABELA !== aeronave.CD_TABELA })
                setListCicloInspecao(result);
                setFilteredListCicloInspecao(filteredArray)
            })
        }, [aeronave])
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

    const onCloseCicloInspecaoDialog = () => {
        setOpenDialogCicloInspecao(false)
    }

    const onCloseConfiguracaoPrimariaDialog = () => {
        setOpenDialogConfiguracaoPrimaria(false)
    }

    const saveCicloInspecaoHandler = async (cdTabela: number) => {
        saveCicloInspecao({
            url: `aeronave/ciclo/alterar/${aeronave?.NR_EQUIPAMENTO}`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { cdTabela: cdTabela }
        }, (result: { message: string, equipamentoAeronave: EquipamentoAeronave }) => {
            console.log(result.equipamentoAeronave.NM_TABELA);
            setSelectedCicloInspecao(result.equipamentoAeronave.NM_TABELA);
        })
        setText('Ciclo Alterado com Sucesso!')
        setShowMessage(true);
        onCloseCicloInspecaoDialog();
    }

    const saveConfiguracaoPrimariaHandler = async (cdMaterial: number) => {
        setText('Configuração Alterada com Sucesso!')
        setShowMessage(true);
        onCloseConfiguracaoPrimariaDialog();
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
                    value={aeronave?.VL_PRECO_EQP ?? ''}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3} marginTop={2} >
            <Grid item xs={12} sm={4} md={5} >

                <InputButton icon={<EditIcon />} value={selectedCicloInspecao} label='Ciclos Inspeções' onClick={() => { setOpenDialogCicloInspecao(true) }} />
            </Grid>
            <Grid item xs={12} sm={4} md={5} >

                <InputButton icon={<EditIcon />} value={selectedConfiguracaoInspecao} label='Configuração Primária' onClick={() => { setOpenDialogConfiguracaoPrimaria(true) }} />
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
                    value={aeronave?.TX_OBS ?? ''}
                />
            </Grid>
        </Grid>
        <DialogCicloInspecao
            ciclos={filteredListCicloInspecao}
            open={openDialogCicloInspecao}
            onClose={onCloseCicloInspecaoDialog}
            onSave={saveCicloInspecaoHandler}
            isLoading={isLoadingCicloInspecao} />
        <DialogConfiguracaoPrimaria
            configuracoes={listConfiguracaoPrimaria}
            open={openDialogConfiguracaoPrimaria}
            onClose={onCloseConfiguracaoPrimariaDialog}
            onSave={saveConfiguracaoPrimariaHandler}
            isLoading={isLoadingConfiguracaoPrimaria} />
        <Message color={color} show={showMessage} text={text} clearHandler={setShowMessage} />
    </Box>)
}

export default TabDescricaoAeronave;