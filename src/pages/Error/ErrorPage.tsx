import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import CustomCard from '../../components/CustomCard';
import WarningIcon from '@mui/icons-material/Warning';

const ErrorPage = () => {
    const [counter, setCounter] = useState<number>(3);
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(counter - 1)
            if (counter === 0)
                navigate("/");
        }, 1000);
        return () => clearInterval(timer);
    }, [counter, navigate])

    if (isRouteErrorResponse(error)) {
        return (
            <Box bgcolor={'#EEF2F6'} height={'100vh'}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                >
                    <CustomCard width='fit-content'>
                        <Typography variant='h4' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>Oops!</Typography>
                        <Typography variant='h5' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>
                            Ocorreu um erro!
                        </Typography>
                        <Typography variant='h6' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>
                            <WarningIcon color='warning' /> Error {error.status}
                        </Typography>
                        <Typography variant='h6' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>{error.statusText}</Typography>
                        {error.data?.message && <p>{error.data.message}</p>}
                        <Typography variant='body2' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>Redirecionando em {counter}s</Typography>
                    </CustomCard>
                </Stack>
            </Box>
        );
    } else {
        return (
            <Box bgcolor={'#EEF2F6'} height={'100vh'}>
                <CustomCard>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        gap={4}
                    >
                        <h1>Oops</h1>
                        <h3>An error ocurred!</h3>
                        <h5>Redirecting in {counter}s</h5>
                    </Stack>
                </CustomCard>
            </Box >
        );
    }
}

export default ErrorPage