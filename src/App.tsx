import { ThemeProvider } from '@mui/material/styles';
import Theme from './themes/Theme';
import NavBar from './components/layout/Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';
import { authActions } from './store/auth-slice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const message = (useAppSelector(state => state.auth.message));
  console.log(message);

  useEffect(() => {
    dispatch(authActions.showMessage());
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <Box className="App" bgcolor={'#EEF2F6'} height={'100vh'} >
        <NavBar>
        </NavBar>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;