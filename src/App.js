// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AdminDashboard from "./components/AdminDashboard";
import ButcherLogin from "./components/ButcherLogin";
import ButcherSignup from "./components/ButcherSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/dashboard" element={< AdminDashboard />} />
        <Route path="/butcher/login" element={< ButcherLogin />} />
        <Route path="/butcher/signup" element={< ButcherSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
