import { Typography, Divider, Select, SelectChangeEvent, Box, MenuItem, InputLabel, FormControl } from '@mui/material';
import MiniCard from "../../components/shared/MiniCard";
import { useState, useEffect } from 'react';
import CustomButton from '../../components/CustomButton';

const OccupationArea = () => {
    const [selectedArea, setSelectedArea] = useState<string>('');
    const [selectedUnidade, setSelectedUnidade] = useState<string>('');
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

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

    const handleChangeUnidade = (event: SelectChangeEvent) => {
        setSelectedUnidade(event.target.value)
    }

    const onClickHandler = () => {

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
            <FormControl size='small'>
                <InputLabel id="unidade-label" >Unidade</InputLabel>
                <Select
                    label="Unidade"
                    labelId='unidade-label'
                    value={selectedUnidade}
                    onChange={handleChangeUnidade}
                    size='small'
                >
                    <MenuItem value=""><em>-</em></MenuItem>
                    <MenuItem value={1}>AFA</MenuItem>
                </Select>
            </FormControl>

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