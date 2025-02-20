import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Inventory Management</h1>
      <p className="text-gray-700 mb-6 text-center w-3/4">
        Manage your inventory seamlessly with real-time tracking, QR code-based product management, 
        and instant stock alerts. Get started today!
      </p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Login
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
