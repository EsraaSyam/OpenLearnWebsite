import './App.css'
import Navbar from './components/navBar/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';



const App: React.FC = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
  );
};

export default App
