// src/App.js
import axios from 'axios';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { AuthProvider } from './auth/AuthProvider';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  axios.defaults.baseURL = 'http://localhost:8080/slow/api'; // Set your base URL here
  axios.defaults.timeout = 10000; // Optionally set a timeout
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<AuthGuard><LoginPage /></AuthGuard>} />
        <Route path="/home" element={<div>Welcome to the Home Page</div>} />
        <Route path='/HomePage' element={<HomePage/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
