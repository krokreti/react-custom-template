import { Box, CircularProgress } from "@mui/material"
import React from "react"
import CustomButton from "./CustomButton"

type ButtonVariantType = "text" | "contained" | "outlined" | undefined
type ColorType = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined

type ButtonProps = {
    children: React.ReactNode,
    isLoading: boolean,
    variant?: ButtonVariantType,
    disabled?: boolean,
    color?: ColorType,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    spacing?: {},
    onClick: () => void,
}

const CustomLoadingButton: React.FC<ButtonProps> = (props) => {
    return (
        <Box sx={props.spacing ?? {}}>
            {!props.isLoading && (
                <CustomButton
                    variant={props.variant ?? "contained"}
                    disabled={props.disabled ?? false}
                    color={props.color ?? "primary"}
                    startIcon={props.startIcon}
                    endIcon={props.endIcon}
                    onClick={props.onClick}
                    sx={{ width: '100%' }}
                >
                    {props.children}
                </CustomButton>
            )}
            {props.isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    )
}

export default CustomLoadingButton;