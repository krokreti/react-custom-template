import Unidade from "./Unidade";
import Tarefa from "./Tarefa";

type Andiretiva = {
    CD_FADT: string,
}

type Diretiva = {
    NR_EQUIPAMENTO: number,
    CD_UNIDADE?: string,
    NR_CUMPRIMENTO?: number,
    CD_SETOR?: string,
    DT_CUMPRIMENTO?: string,
    DT_INSERT?: string,
    DT_PROVAVEL_CUMP?: string,
    DT_UPDATE?: string,
    ID_TAREFA_TRAB?: string,
    NM_USER_INSERT?: string,
    NM_USER_UPDATE?: string,
    NR_HORAS?: number,
    NR_OS?: number,
    TX_OBS?: string,
    CD_TAREFA?: string,
    CD_FADT?: string,
    UNIDADES?: Unidade,
    TAREFAS?: Tarefa
    ANTIDIRETIVAS?: Andiretiva
}

export default Diretiva;