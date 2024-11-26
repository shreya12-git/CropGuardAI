"use client"; // Mark this component as a client component

import { useState } from 'react';

export default function AuthPage() {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Function to toggle between login and signup form
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex w-full max-w-4xl h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side: Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://imgs.search.brave.com/8rZkUobJtTnRMJ2gLu14zvZeaYvHMbUzAcE-a2qcMfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY1/NjQ2NDg2L3Bob3Rv/L3JpY2UtaGFydmVz/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Q01kVE44ekFL/aU96QlZhY0xMOVNE/THYwREpWeWxLZ2p3/b05EWjhCeXkybz0" // Ensure the image is placed in the public folder or use a URL
            alt="Crop field"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side: Login/Signup form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-gray-100">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <p className="text-center text-gray-500 mb-6">
            {isLogin
              ? "Log in to continue where you left off."
              : "Sign up to explore the platform."}
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password field only shows on signup */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <button
              className="w-full px-4 py-2 text-white font-semibold rounded-lg shadow-lg"
              style={{ backgroundColor: 'rgb(136 196 49 / var(--tw-bg-opacity))' }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="text-sm text-center mt-6">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={toggleForm}
                  className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none transition duration-200"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={toggleForm}
                  className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none transition duration-200"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
