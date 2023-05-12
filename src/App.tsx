import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes/Theme';
import NavBar from './components/layout/Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { authActions, fetchUserByCpf } from './store/auth-slice';
import { useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Notistack from './plugins/Notistack';
import keycloak from './plugins/keycloak.js';
import 'dayjs/locale/pt-br';

function App() {
  const dispatch = useAppDispatch();
  const isLightMode = (useAppSelector(state => state.theme.isLightMode));
  // const cpf: string = (useAppSelector(state => state.auth.cpf));
  useEffect(() => {
    dispatch(authActions.setUserCpf({
      cpf: keycloak.tokenParsed.preferred_username,
    }));
  }, [keycloak])

  const theme = isLightMode ? lightTheme : darkTheme;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider theme={theme}>
        <Notistack />
        <Box className="App"  >
          <NavBar />
          <Outlet />
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;