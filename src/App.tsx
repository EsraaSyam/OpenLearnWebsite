import './App.css'
import Navbar from './components/navBar/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = "https://openlearn-production.up.railway.app/api/v1";


const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/auth/profile`, { withCredentials: true })
            .then((response) => {
                setIsAuthenticated(true); 
                console.log("User Data:", response.data);
            })
            .catch((err) => {
                console.log("User not authenticated:", err);
                setIsAuthenticated(false); 
            });
    }, []);
    
    return (
        <Router>
            <Navbar />
            <div>
                {isAuthenticated ? <p>Welcome back!</p> : <p>Please log in</p>}
            </div>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App
