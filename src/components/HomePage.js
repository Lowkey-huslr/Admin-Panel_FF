// src/pages/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Welcome to Fresh Flesh</h1>

      <button
        onClick={() => navigate("/admin/dashboard")}
        className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Admin Dashboard
      </button>

      <button
        onClick={() => navigate("/butcher/login")}
        className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg"
      >
        Butcher Login
      </button>

      <button
        onClick={() => navigate("/butcher/signup")}
        className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
      >
        Butcher Signup
      </button>
    </div>
  );
};

export default HomePage;
