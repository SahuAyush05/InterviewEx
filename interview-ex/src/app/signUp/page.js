'use client';
import { useState } from "react";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen opacity-25">
      <div className="bg-white p-12 rounded-3xl shadow-lg w-full max-w-sm bg-gradient-to-t from-[#a3b4cf] to-[#ffffff]">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          )}
          <button
            type="submit"
            className="w-full bg-[#0B192C] text-white p-2 rounded-lg hover:bg-[#2d476e] transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
