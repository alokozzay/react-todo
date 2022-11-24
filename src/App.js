import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/main";
import "./App.css";
import Navbar from "./copmponents/UI/navbar/Navbar";
import AppRouter from "./copmponents/AppRouter";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
}
