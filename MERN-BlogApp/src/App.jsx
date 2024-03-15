import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import RegisterPage from "./components/registerPage/registerPage";
import BlogDetailLayout from "./layout/BlogDetailLayout";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./components/loginPage/loginPage";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <MainLayout /> : <Navigate to="/login" />}
      />
      <Route
        path="/detay/:id"
        element={user ? <BlogDetailLayout /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!user ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/register"
        element={!user ? <RegisterPage /> : <Navigate to="/" />}
      />
      <Route
        path="/admin"
        element={user ? <AdminLayout /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
