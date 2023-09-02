import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Places from './pages/Places';
import Time from './pages/Time';
import Food from './pages/Food';
import Packages from './pages/Packages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="Places" element={<Places />} exact/>
        <Route path="Time" element={<Time />} exact />
        <Route path="Food" element={<Food />} exact />
        <Route path="Packages" element={<Packages />} exact />
  </Routes>
        
    </div>
  );
}

export default App;
