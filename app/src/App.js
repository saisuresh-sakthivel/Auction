// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './index.css';
import Home from './components/Home';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if token is available in localStorage on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route 
                        path="/register" 
                        element={<Register />} 
                    />
                    <Route 
                        path="/login" 
                        element={<Login onLogin={handleLogin} />} 
                    />
                    <Route 
                        path="/home" 
                        element={isAuthenticated ? <Home/> : <Navigate to="/login" />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
