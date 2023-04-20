import NavBar from './components/layout/Navbar';
import MainCard from './components/shared/MainCard';

function App() {

  return (
    <div className="App">
      <NavBar>
        <MainCard title='Teste' >
          Oi
        </MainCard>
      </NavBar>
    </div>
  );
}

export default App;