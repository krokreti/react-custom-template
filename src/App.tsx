import { ThemeProvider } from '@mui/material/styles';
import Theme from './themes/Theme';
import NavBar from './components/layout/Navbar';
import Box from '@mui/material/Box';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Box className="App" bgcolor={'#EEF2F6'} height={'100vh'} >
        <NavBar>
          <Dashboard />
        </NavBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;