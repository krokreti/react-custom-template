import { TextField, Button, InputAdornment } from '@mui/material';

type InputButtonTypes = {
    icon: React.ReactNode,
    value?: string,
    label?: string,
    onClick: () => void,
}

const InputButton: React.FC<InputButtonTypes> = (props) => {
    return (
        <TextField
            label={props.label ?? ''}
            value={props.value ?? ''}
            variant="outlined"
            size={"small"}
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Button
                            color='primary'
                            variant='contained'
                            size='large'
                            style={{
                                position: "absolute",
                                right: 0,
                            }}
                            onClick={props.onClick}>
                            {props.icon}
                        </Button>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default InputButton;