import { useState } from 'react'
import HomePage from './pages/pages/HomePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/pages/LoginPage.jsx";
import PanduanPage from "./pages/pages/PanduanPage.jsx";
import RegisterPage from "./pages/pages/RegisterPage.jsx";
import ForumPage from "./pages/pages/ForumPage.jsx";
import Test from './pages/pages/Test.jsx';
import PostMobile from './pages/pages/PostMobile.jsx';
import ThreadPage from './pages/pages/ThreadPage.jsx';

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
          <Route path="/test" element={<Test/>} />
          <Route path="/post" element={<PostMobile/>} />
          <Route path="/thread/:id" element={<ThreadPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
