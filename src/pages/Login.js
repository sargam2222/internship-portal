// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Internship Portal
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full px-5 py-3 border text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-5 py-3 border text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "#00d1d1", padding: "10px 20px", border: "none", borderRadius: "5px" }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => alert('Redirect to Signup Page')}
            style={{ backgroundColor: "#00d1d1", padding: "10px 20px", border: "none", borderRadius: "5px" }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
