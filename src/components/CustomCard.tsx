import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

type Props = {
    width?: string,
    borderRadius?: string,
    marginX?: string | number,
    children: React.ReactNode;
    sx?: {}
}

const CustomCard: React.FC<Props> = (props) => {
    return (
        <Container sx={{ display: 'flex', justifyContent: "center", marginY: '2em' }}>
            <Box
                p={4}
                bgcolor={'#fff'}
                width={props.width ?? '100%'}
                maxWidth={'60em'}
                marginX={props.marginX ?? 0}
                height={'fit-content'}
                borderRadius={props.borderRadius ?? '30px'}
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
                sx={props.sx}
            >
                {props.children}
            </Box>
        </Container>
    )
}

export default CustomCard;