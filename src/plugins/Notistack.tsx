import { SnackbarProvider } from 'notistack';

const Notistack = () => {
    return (
        <SnackbarProvider
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            autoHideDuration={3000}
            maxSnack={3}
        />
    );
}

export default Notistack;