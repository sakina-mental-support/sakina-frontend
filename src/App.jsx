import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/login';
import ChatPage from './components/ChatPage';
import Profile from './components/Profile';
import Exercises from './components/exercises';
import ExerciseDetail from './components/ExerciseDetail';
import MoodTracker from './components/MoodTracker';
import MoodAnalytics from './components/MoodAnalytics';
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
        <Route path="/exercise-detail" element={<ExerciseDetail />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/mood-analytics" element={<MoodAnalytics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;