import _React, { useState } from 'react';
import { Box } from '@mui/material';
import dayJs, { Dayjs } from 'dayjs';
import CustomDatePicker from '../../../components/CustomDatePicker';
import { DatePicker } from '@mui/x-date-pickers';


const FourthComponent = () => {
    const [data, setData] = useState<Dayjs | null>(dayJs());

    const inputDataHandler = (newValue: Dayjs | null) => {
        setData(newValue);
        console.log(newValue)
    }

    return (<Box display={'flex'} flexDirection={'column'}>
        Oi
        <span>{data?.toISOString()}</span>
        <DatePicker label="Basic date picker" onChange={inputDataHandler} value={data} />
    </Box>)
}

export default FourthComponent;