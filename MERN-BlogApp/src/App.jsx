import BlogDetailLayout from "./layout/BlogDetailLayout";
import MainLayout from "./layout/MainLayout";
import SignLayout from "./layout/SignLayout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path="/detay/:id" element={<BlogDetailLayout />} />
    <Route path="/login" element={<SignLayout />} />
  </Routes>
  );
}

export default App;
