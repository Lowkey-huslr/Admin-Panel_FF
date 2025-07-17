// src/App.js
import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import ButcherSignup from "./components/ButcherSignup";
import ButcherLogin from "./components/ButcherLogin";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/butcher-signup" element={<ButcherSignup />} />
        <Route path="/butcher-login" element={<ButcherLogin />} />

        {/* 🔒 Protected Admin Route */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
