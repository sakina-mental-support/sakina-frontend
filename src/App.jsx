import React from 'react'

import{ BrowserRouter,NavLink, Routes, Route}  from "react-router-dom"
import { Link } from "react-router-dom";

<Link to="/register">Create an account</Link>

import Register from './components/Register';
import BottomNavbar from './components/BottomNavbar';
import Login from './components/login';
import ChatPage from './components/ChatPage';
import Profile from './components/Profile';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
   </BrowserRouter>
   

  );
};

export default App;

