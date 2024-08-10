import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClubSelection from './Components/ClubSelection';
import Home from './Pages/Home';
import BuildSet from './Pages/BuildSet';
import BuySet from './Pages/BuySet';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/build-set" element={<BuildSet />} />
          <Route path="/buy-set" element={<BuySet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
