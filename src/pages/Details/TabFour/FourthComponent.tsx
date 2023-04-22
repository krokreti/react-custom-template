import _React from 'react';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FourthComponent = () => {
    return (<Box display={'flex'} flexDirection={'column'}>
        Oi
        <DatePicker label="Basic date picker" slotProps={{ textField: { helperText: 'DD/MM/AAAA' } }} />
    </Box>)
}

export default FourthComponent;