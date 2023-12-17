import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLogSign = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className=" shadow-md rounded px-2 pt-6 pb-8 mb-4 flex flex-col w-[29rem]">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Please provide your registered Email Id to reset Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4 flex justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/2 rounded focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
          <div className="w-4"></div>
          <button
            type="button"
            onClick={handleLogSign}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-1/2 rounded focus:outline-none focus:shadow-outline"
          >
            Login/Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
