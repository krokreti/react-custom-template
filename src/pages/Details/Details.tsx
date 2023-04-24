import TabComponent from "../../components/TabComponent";
import MainCard from "../../components/shared/MainCard";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import { CircularProgress } from '@mui/material';
import EquipamentoAeronave from "../../models/EquipamentoAeronave";
import DetailsForm from './DetailsForm';
import FlightIcon from '@mui/icons-material/Flight';

const Details = () => {
    const params = useParams();
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave>();
    const { sendRequest, isLoading } = useHttp();

    // /siloms/api/aeronave/:nrEquipamento
    //http://localhost:3000/
    useEffect(() => {
        sendRequest({ url: `http://localhost:3000/siloms/api/aeronave/${params.id}` }, (data: EquipamentoAeronave) => {
            setEquipamentoAeronave(data);
            console.log(data);
        });
    }, []);

    return (
        <MainCard title={`Detalhe da Aeronave: ${equipamentoAeronave?.NR_MATRICULA}`} startIcon={<FlightIcon />}>
            {!isLoading && (<DetailsForm aeronave={equipamentoAeronave} />)}
            {isLoading && (<CircularProgress />)}
            {!isLoading && (<TabComponent />)}
        </MainCard>)
}

export default Details;