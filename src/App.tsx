import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './themes/Theme';
import NavBar from './components/layout/Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { authActions } from './store/auth-slice';
import { useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Notistack from './plugins/Notistack';
import 'dayjs/locale/pt-br';


function App() {
  const dispatch = useAppDispatch();
  const message = (useAppSelector(state => state.auth.message));
  const isLightMode = (useAppSelector(state => state.theme.isLightMode));
  console.log(message);

  useEffect(() => {
    dispatch(authActions.showMessage());
  }, [])

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