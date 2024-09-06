import { useState } from 'react'
import HomePage from './pages/pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/pages/LoginPage.jsx";
import PanduanPage from "./pages/pages/PanduanPage.jsx";
import RegisterPage from "./pages/pages/RegisterPage.jsx";
import ForumPage from "./pages/pages/ForumPage.jsx";

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
