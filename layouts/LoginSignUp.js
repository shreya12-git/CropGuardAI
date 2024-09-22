"use client"; 
import { useState } from 'react';

export default function Auth() {
  // State to track whether the user is on the 'login' or 'signup' form
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Conditionally show confirm password field only for signup */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-sm text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 focus:outline-none"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 focus:outline-none"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
