import React, { useState } from "react";
import { FaGoogle,FaLinkedin,FaGithub} from "react-icons/fa";

export const SignUpForm = () => {
  const [username,setUsername]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up with:",username, email, password);
  };
  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
  };
  const handleLinkedinSignUp = () => {  
    console.log("Sign up with LinkedIn");
  };
  const handleGithubSignUp = () => {  
    console.log("Sign up with GitHub");
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
            <p className="mt-2 text-sm text-gray-600">
            Sign up to get started with JobSeek
            </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
                </label>
                <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="username"
                />
            </div>    
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
                </label>
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                />
            </div>
            </div>
            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Sign up
            </button>
            </div>
            <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
            </div>
            <div className=" text-2xl flex justify-evenly">
            <FaGoogle onClick={handleGoogleSignUp}/>
            <FaLinkedin onClick={handleLinkedinSignUp}/>
            <FaGithub onClick={handleGithubSignUp}/>
            </div>
        </form>
        <div className="text-center text-sm">
            <p className="text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
            </a>
            </p>
        </div>
        </div>
    </div>
  );
};

