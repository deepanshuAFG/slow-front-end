import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';


function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from AuthProvider
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/logging", {
        username,
        password,
      });

      const token = response.data;
      login(token); // Use login function from AuthProvider
      navigate("/HomePage"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2c2c2c]">
      <div className="bg-[#bfbfbf] p-8 rounded-md shadow-xl w-96 max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#2c2c2c]">Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-[#4f4f4f] rounded-md text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-[#4f4f4f] rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2c2c2c] to-[#4f4f4f] text-white py-3 rounded-md font-semibold hover:bg-gradient-to-l hover:from-[#2c2c2c] hover:to-[#4f4f4f] transition-all duration-300"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
