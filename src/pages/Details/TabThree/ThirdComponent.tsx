import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Input from '../../../components/Input';
import useInput from '../../../hooks/use-input';
import { useEffect, useState } from 'react';
import CustomLoadingButton from '../../../components/CustomLoadingButton';
// import CustomButton from '../../../components/CustomButton';


const ThirdComponent = () => {
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        value: enteredName,
        hasError: enteredNameHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: inputNameChangeHandler,
        valueBlurHandler: inputNameBlurHandler,
    } = useInput(() => true);

    const {
        value: enteredLastName,
        hasError: enteredLastNameHasError,
        isValid: enteredLastNameIsValid,
        valueChangeHandler: inputLastNameChangeHandler,
        valueBlurHandler: inputLastNameBlurHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: enteredEmailHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: inputEmailChangeHandler,
        valueBlurHandler: inputEmailBlurHandler,
    } = useInput(value => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) !== null);

    const lastNameErrorMessage = enteredLastNameHasError ? 'O sobrenome é obrigatório' : '';
    const emailErrorMessage = enteredEmailHasError ? 'O email é inválido' : '';

    useEffect(() => {
        if (enteredLastNameIsValid && enteredEmailIsValid) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [enteredLastNameIsValid, enteredEmailIsValid]);

    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} >
                <Grid item xs={4} >
                    <Input
                        id='name'
                        label='Nome'
                        type='text'
                        value={enteredName}
                        error={enteredNameHasError}
                        onChange={inputNameChangeHandler}
                        onBlur={inputNameBlurHandler}
                    />
                </Grid>
                <Grid item xs={4} >
                    <Input
                        id='sobrenome'
                        label='Sobrenome'
                        type='text'
                        required={true}
                        helperText={lastNameErrorMessage}
                        value={enteredLastName}
                        error={enteredLastNameHasError}
                        onChange={inputLastNameChangeHandler}
                        onBlur={inputLastNameBlurHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Input
                        id='email'
                        label='E-mail'
                        type='email'
                        required={true}
                        helperText={emailErrorMessage}
                        value={enteredEmail}
                        error={enteredEmailHasError}
                        onChange={inputEmailChangeHandler}
                        onBlur={inputEmailBlurHandler}
                    />
                </Grid>
            </Grid>
            {/* <CustomButton onClick={() => { alert('cadastrado!') }} text='Cadastrar' color='primary' disabled={!formIsValid} sx={{ marginTop: 2 }} /> */}
            <CustomLoadingButton onClick={() => { setIsLoading(true) }} disabled={!formIsValid} isLoading={isLoading} spacing={{ marginTop: 4 }}>
                Enviar
            </CustomLoadingButton>
        </Box>
    </>)
}

export default ThirdComponent;