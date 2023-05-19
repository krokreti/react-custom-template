import NavBar from './components/layout/Navbar';
import OccupationArea from './pages/OccupationArea/OccupationArea';
import Notistack from './plugins/Notistack';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes/Theme';
import { Box } from '@mui/material';
import { Outlet, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { authActions } from './store/auth-slice';
import { useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import keycloak from './plugins/keycloak.js';
import 'dayjs/locale/pt-br';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLightMode = (useAppSelector(state => state.theme.isLightMode));
  const unidade = useAppSelector(state => state.occupationArea.unidade);
  // const cpf: string = (useAppSelector(state => state.auth.cpf));
  useEffect(() => {
    if (keycloak.tokenParsed) {
      dispatch(authActions.setUserCpf(keycloak.tokenParsed.preferred_username.toString()));
    }
  }, [keycloak])

  useEffect(() => {
    if (!unidade) {
      navigate("/area-atuacao")
    }
  }, [unidade])

  const theme = isLightMode ? lightTheme : darkTheme;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider theme={theme}>
        <Notistack />
        <Box className="App"  >
          <NavBar />
          {unidade && (<Outlet />)}
          {!unidade && (<OccupationArea />)}
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;