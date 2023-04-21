import Button from "@mui/material/Button";

type ButtonVariantType = "text" | "contained" | "outlined" | undefined
type ColorType = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined

type ButtonProps = {
    text: string,
    variant?: ButtonVariantType,
    disabled?: boolean,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    color?: ColorType
    sx?: {}
    onClick: () => void,
}

const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            variant={props.variant ?? "contained"}
            type={"button"}
            disabled={props.disabled ?? false}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            onClick={props.onClick}
            color={props.color ?? "primary"}
            sx={props.sx}
        >
            {props.text}
        </Button>
    )
}

export default CustomButton;