import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '../../components/Input';
import EquipamentoAeronave from '../../models/EquipamentoAeronave';

const DetailsForm: React.FC<{ aeronave: EquipamentoAeronave | undefined }> = ({ aeronave }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={"2"}>
                <Grid item xs={12} sm={1}>
                    <Input
                        id='name'
                        label='Matrícula'
                        type='text'
                        disabled
                        shrink
                        value={aeronave?.NR_MATRICULA}
                    />
                </Grid>
            </Grid>
        </Box>);
}

export default DetailsForm;