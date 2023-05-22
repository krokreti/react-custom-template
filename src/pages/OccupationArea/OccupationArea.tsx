import { useState, useEffect } from 'react';
import { Typography, Divider, Select, SelectChangeEvent, Box, MenuItem, InputLabel, FormControl, Autocomplete, TextField } from '@mui/material';
import MiniCard from "../../components/shared/MiniCard";
import CustomButton from '../../components/CustomButton';
import keycloak from '../../plugins/keycloak.js';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks/redux-hooks';
import { fetchUnidadesPorCpf, occupationAreaActions } from '../../store/occupation-area-slice';
import Unidade from '../../models/Unidade';

const OccupationArea = () => {
    const navigate = useNavigate();
    const [selectedArea, setSelectedArea] = useState<string>('');
    const [selectedUnidade, setSelectedUnidade] = useState<string>('');
    const [unidades, setUnidades] = useState<Unidade[]>([]);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUnidadesPorCpf(keycloak.tokenParsed!.preferred_username)).then((state: any) => {
            setUnidades(state.payload);
        });
    }, [])

    useEffect(() => {
        if (selectedArea && selectedUnidade) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [selectedArea, selectedUnidade])

    const handleChangeArea = (event: SelectChangeEvent) => {
        setSelectedArea(event.target.value);
    }

    const onClickHandler = () => {
        dispatch(occupationAreaActions.setToken({
            unidade: selectedUnidade,
            area: selectedArea,
        }))
        navigate("/");
    }

    return (<MiniCard>
        <Typography variant='h5' fontWeight={'bold'}>
            Manutenção de Aeronaves
        </Typography>
        <Divider />
        <Typography variant='body1' color={'gray'} >
            Por favor, escolha sua área de atuação:
        </Typography>
        <Box display={'flex'} flexDirection={'column'} gap={4}>
            <Autocomplete
                size='small'
                options={unidades}
                getOptionLabel={(unidade: Unidade) => unidade.SG_UNIDADE}
                renderInput={(params: any) => <TextField {...params} label="Unidade" />}
                onChange={(_event: React.SyntheticEvent, newValue: Unidade) => {
                    console.log(newValue)
                    setSelectedUnidade(newValue.CD_UNIDADE);
                }}
            />
            {/* <FormControl size='small'>
                <InputLabel id="unidade-label" >Unidade</InputLabel>
                <Select
                    label="Unidade"
                    labelId='unidade-label'
                    value={selectedUnidade}
                    onChange={handleChangeUnidade}
                    size='small'
                >
                    <MenuItem value=""><em>-</em></MenuItem>
                    {unidades.map((unidade, index) => (
                        <MenuItem key={index} value={unidade.CD_UNIDADE}>{unidade.SG_UNIDADE}</MenuItem>
                    ))}
                </Select>
            </FormControl> */}

            <FormControl size='small'>
                <InputLabel id="area-label">Área de Atuação</InputLabel>
                <Select
                    label="Área de Atuação"
                    labelId='area-label'
                    value={selectedArea}
                    onChange={handleChangeArea}
                    size='small'
                >
                    <MenuItem value="">-</MenuItem>
                    <MenuItem value={1}>Aeronáutico</MenuItem>
                </Select>
            </FormControl>

            <CustomButton onClick={onClickHandler} disabled={!isFormValid} >
                Começar!
            </CustomButton>
        </Box>
    </MiniCard>)
}

export default OccupationArea;