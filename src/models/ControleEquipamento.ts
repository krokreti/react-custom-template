type ControleEquipamento = {
    CD_CONTROLE: string;
    DS_CONTROLE?: string;
    NR_EQUIPAMENTO: number;
    VL_DESDE_NOVO_INICIAL?: number;
    VL_DESDE_NOVO?: number;
    VL_TSO?: number;
    DT_INICIAL?: Date;
    DT_INSERT?: Date;
    DT_UPDATE?: Date;
    IN_CONTROLE_HORA?: string;
    NM_USER_INSERT?: string;
    NM_USER_UPDATE?: string;
}

export default ControleEquipamento;