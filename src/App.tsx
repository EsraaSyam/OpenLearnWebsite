import './App.css'
import Navbar from './components/navBar/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateCourse from './pages/Courses/CreateCourse';
import CreateSection from './pages/sections/CreateSection';
import ProtectedRoute from './components/ProtectedRoute';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://openlearn-production.up.railway.app/api/v1";

const App: React.FC = () => {
    const [user, setUser] = useState<{ firstName: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/auth/profile`, { withCredentials: true })
            .then((response) => {
                setUser(response.data); 
            })
            .catch((err) => {
                console.error("User not logged in:", err.response?.data?.message || err.message);
                setUser(null); 
            }).finally(() => {
                setIsLoading(false); 
            });
    }, []);
    
    return (
        <Router>
            <Navbar user={user} />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute user={user} isLoading={isLoading} />}>
                    <Route path="/create-course" element={<CreateCourse />} />
                    <Route path="/create-course/:courseId/create-section" element={<CreateSection />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App
