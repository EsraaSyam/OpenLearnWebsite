import './App.css'
import Navbar from './components/navBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';



const App: React.FC = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
  );
};

export default App
