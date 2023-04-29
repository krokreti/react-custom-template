import { ThemeProvider } from '@mui/material/styles';
import Theme from './themes/Theme';
import NavBar from './components/layout/Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { authActions } from './store/auth-slice';
import { useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pt-br';

function App() {
  const dispatch = useAppDispatch();
  const message = (useAppSelector(state => state.auth.message));
  console.log(message);

  useEffect(() => {
    dispatch(authActions.showMessage());
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <ThemeProvider theme={Theme}>
        <Box className="App" bgcolor={Theme.background.default} height={'100vh'} >
          <NavBar>
          </NavBar>
          <Outlet />
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;