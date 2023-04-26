import TabComponent from "../../components/TabComponent";
import MainCard from "../../components/shared/MainCard";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import EquipamentoAeronave from "../../models/EquipamentoAeronave";
import DetailsForm from './DetailsForm';
import FlightIcon from '@mui/icons-material/Flight';
import LoadingCard from "../../components/LoadingCard";

const Details = () => {
    const params = useParams();
    const [equipamentoAeronave, setEquipamentoAeronave] = useState<EquipamentoAeronave>();
    const { sendRequest, isLoading } = useHttp();

    useEffect(() => {
        sendRequest({ url: `siloms/api/aeronave/${params.id}` }, (data: EquipamentoAeronave) => {
            setEquipamentoAeronave(data);
            console.log(data);
        });
    }, []);

    return (
        <MainCard title={`Detalhes da Aeronave: ${equipamentoAeronave?.NR_MATRICULA}`} startIcon={<FlightIcon />}>
            {isLoading && (<LoadingCard />)}
            {!isLoading && (<DetailsForm aeronave={equipamentoAeronave} />)}
            {!isLoading && (<TabComponent aeronave={equipamentoAeronave} />)}
        </MainCard>)
}

export default Details;