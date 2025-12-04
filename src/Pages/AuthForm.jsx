import React, { useState } from "react";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false); // Toggle form
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      alert(`Signed up!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
    } else {
      alert(`Logged in!\nEmail: ${formData.email}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 w-full max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {isSignup ? "Signup Now" : "Login Now"}
        </h2>

        {isSignup && (
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="text"
            placeholder="Enter your username"
            required
          />
        )}

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />

        {!isSignup && (
          <div className="text-right py-2">
            <a className="text-blue-600 underline" href="#">
              Forgot Password
            </a>
          </div>
        )}

        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white"
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>

        <p className="text-center mt-4">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            type="button"
            className="text-blue-500 underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login Now" : "Signup Now"}
          </button>
        </p>
      </form>
    </div>
  );
}
