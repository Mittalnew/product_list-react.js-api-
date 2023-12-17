import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/nav");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex items-center justify-center pt-[40px]">
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[40%]"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded-[1.25rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm italic mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded-[1.25rem] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm italic mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <div className="">
          <a
            href="#"
            onClick={handleForgotPassword}
            className="text-blue-500 text-sm hover:text-blue-700"
          >
            Forgot Password?
          </a>
        </div>

        <div className="mb-4 mt-[1rem]">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-[1.25rem] focus:outline-none focus:shadow-outline"
          >
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
