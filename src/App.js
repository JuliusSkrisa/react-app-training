import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Devices from './pages/Devices/Devices';
import { Route, Routes } from 'react-router-dom';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="devices" element={ <Devices/> } />
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
