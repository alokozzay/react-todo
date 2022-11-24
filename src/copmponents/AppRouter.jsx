import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Main from "../pages/main";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Main />} />
    </Routes>
  );
}
