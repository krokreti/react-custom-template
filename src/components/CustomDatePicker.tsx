import dayJs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { DateValidationError } from '@mui/x-date-pickers/models';


type DatePickerType = {
    value: null | undefined | React.ChangeEvent<HTMLInputElement>,
    defaultValue?: null | undefined | React.ChangeEvent<HTMLInputElement>,
    label?: string,
    required?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    disablePast?: boolean,
    disableFuture?: boolean,
    helperText?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement> | null) => void,

}

const CustomDatePicker: React.FC<DatePickerType> = (props) => {
    const [_error, setError] = useState<DateValidationError | null>(null);
    return (
        <DatePicker
            value={props.value}
            defaultValue={props.defaultValue}
            disabled={props.disabled ?? false}
            readOnly={props.readonly ?? false}
            disablePast={props.disablePast ?? false}
            disableFuture={props.disableFuture ?? false}
            slotProps={{ textField: { helperText: props.helperText ?? '' } }}
            onChange={props.onChange}
            onError={(newError) => setError(newError)}
        />
    );
}

export default CustomDatePicker;
