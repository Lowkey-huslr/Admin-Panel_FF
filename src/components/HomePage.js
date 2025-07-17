// src/components/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-10 text-center">
        Welcome to Admin Panel
      </h1>

      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={() => navigate("/admin-login")}
          className="w-full py-4 text-lg font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          🔐 Admin Login
        </button>
        <button
          onClick={() => navigate("/butcher-login")}
          className="w-full py-4 text-lg font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700"
        >
          🔑 Butcher Login
        </button>
        <button
          onClick={() => navigate("/butcher-signup")}
          className="w-full py-4 text-lg font-semibold bg-purple-600 text-white rounded-xl hover:bg-purple-700"
        >
          🪓 Butcher Signup
        </button>
      </div>
    </div>
  );
};

export default HomePage;

