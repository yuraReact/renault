import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ModelsPage from './pages/ModelsPage.jsx';
import MainPage from './pages/MainPage.jsx';
import WorkShopPage from './pages/WorkShopPage.jsx';
import FanShopPage from './pages/FanShopPage.jsx';
import RenaultSportPage from './pages/RenaultSportPage.jsx';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/workshop" element={<WorkShopPage />} />
          <Route path='/fanshop' element={<FanShopPage />}/>
          <Route path='/rs' element={<RenaultSportPage />}/>
        </Routes>
      </div>
  );
}

export default App;
