import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import RegisterPage from "./components/registerPage/registerPage";
import BlogDetailLayout from "./layout/BlogDetailLayout";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./components/loginPage/loginPage";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" element={user ? <MainLayout /> : <Navigate to="/login" />} />
      <Route path="/detay/:id" element={user ? <BlogDetailLayout /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
