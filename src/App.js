import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Devices from './pages/Devices/Devices';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="devices" element={ <Devices/> } />
      </Routes>
    </div>
  );
}

export default App;
