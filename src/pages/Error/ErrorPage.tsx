import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import CustomCard from '../../components/CustomCard';

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
                        <h1>Oops!</h1>
                        <h2>An error ocurred!</h2>
                        <h2>{error.status}</h2>
                        <p>{error.statusText}</p>
                        {error.data?.message && <p>{error.data.message}</p>}
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