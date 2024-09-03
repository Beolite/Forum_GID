import { useState } from 'react'
import HomePage from './pages/HomePageItems/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPageItems/LoginPage.jsx";
import PanduanPage from "./pages/PanduanPage/PanduanPage.jsx";
import RegisterPage from "./pages/LoginPageItems/RegisterPage.jsx";
import ForumPage from "./pages/ForumPageItems/ForumPage.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/panduan" element={<PanduanPage />} />
          <Route path="/forum" element={<ForumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
