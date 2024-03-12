import RegisterPage from "./components/registerPage/registerPage";
import BlogDetailLayout from "./layout/BlogDetailLayout";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./components/loginPage/loginPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/detay/:id" element={<BlogDetailLayout />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
