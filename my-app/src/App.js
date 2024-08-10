import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BuildSet from './Pages/BuildSet';
import BuySet from './Pages/BuySet';
import { SelectedClubsProvider } from './Components/SelectedClubsContext';
import './App.css';

function App() {
  return (
    <Router>
      <SelectedClubsProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build-set" element={<BuildSet />} />
            <Route path="/buy-set" element={<BuySet />} />
          </Routes>
        </div>
      </SelectedClubsProvider>
    </Router>
  );
}

export default App;


