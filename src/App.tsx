import './App.css'
import Navbar from './components/navBar/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = "https://openlearn-production.up.railway.app/api/v1";

const App: React.FC = () => {
    const [user, setUser] = useState<{ firstName: string } | null>(null);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/auth/profile`, { withCredentials: true })
            .then((response) => {
                setUser(response.data); 
            })
            .catch((err) => {
                console.error("User not logged in:", err.response?.data?.message || err.message);
                setUser(null); 
            });
    }, []);
    
    return (
        <Router>
            <Navbar user={user} />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App
