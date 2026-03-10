import React from 'react'

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";



import Register from './components/Register';
import BottomNavbar from './components/BottomNavbar';
import Login from './components/login';
import ChatPage from './components/ChatPage';
import Profile from './components/Profile';
import Exercises from './components/exercises';
import MoodTracker from './components/MoodTracker';
import ForgotPassword from './components/Forgotpassword';
import CheckEmail from './components/Checkemail';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/mood" element={<MoodTracker />} />


      </Routes>
    </BrowserRouter>


  );
};export default App;