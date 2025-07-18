// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AdminDashboard from "./components/AdminDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/dashboard" element={< AdminDashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
