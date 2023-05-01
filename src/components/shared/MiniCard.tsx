import React from "react"
import { Box, Container, Stack } from "@mui/material";
import Children from "../../models/Children";

const MiniCard: React.FC<Children> = (props) => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box
                p={4}
                bgcolor={'#fff'}
                width={'24em'}
                height={'fit-content'}
                borderRadius={2}
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            >
                <Stack
                    direction={"column"}
                    gap={3}
                >
                    {props.children}
                </Stack>
            </Box>
        </Container>
    )
}

export default MiniCard