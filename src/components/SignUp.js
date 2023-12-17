import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountType: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    pincode: "",
    city: "",
    countryCode: "",
    mobileNumber: "",
    fax: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const newErrors = { ...errors };

    switch (e.target.name) {
      case "firstName":
        newErrors.firstName = e.target.value.trim()
          ? ""
          : "Please enter your first name";
        break;
      case "password":
        newErrors.password = passwordRegex.test(e.target.value)
          ? ""
          : "Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          formData.password === e.target.value ? "" : "Passwords do not match";
        break;
      case "city":
        newErrors.city = e.target.value.trim() ? "" : "Please enter your city";
        break;
      case "pincode":
        newErrors.pincode = e.target.value.trim() ? "" : "Please enter pincode";
        break;
      case "state":
        newErrors.state = e.target.value.trim()
          ? ""
          : "Please select your state";
        break;

      case "email":
        if (!e.target.value.trim()) {
          newErrors.email = "Please enter your email";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          newErrors.email = emailRegex.test(e.target.value)
            ? ""
            : "Please enter a valid email address";
        }
        break;

      case "address":
        newErrors.address = e.target.value.trim()
          ? ""
          : "Please enter your address";
        break;
      case "country":
        newErrors.country = e.target.value.trim()
          ? ""
          : "Please enter country name";
        break;
      case "countryCode":
        newErrors.countryCode = e.target.value.trim()
          ? ""
          : "select country code";
        break;

      case "mobileNumber":
        if (!formData.countryCode.trim()) {
          newErrors.countryCode = "select code";
        }
        newErrors.mobileNumber = e.target.value.trim()
          ? ""
          : "Please enter your mobile number";
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name";
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address";
    }
    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city";
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Please enter your pincode";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Please enter country name";
    }
    if (!formData.state.trim()) {
      newErrors.state = "Please select your state";
    }
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = "select coutry code";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
    }
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="flex items-center justify-center pt-[40px]">
      <form
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[1050px]"
        onSubmit={handleSubmit}
      >
        <div className="flex mb-3">
          <button
            type="button"
            onClick={handleLoginClick}
            className="w-1/2 rounded-full bg-blue-500 text-white p-2"
          >
            LOGIN
          </button>
          <button className="w-1/2 bg-[#7FFFD4] rounded-full text-white p-2">
            SIGNUP
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Individula/Enterprise/Goverment*
          </label>
          <div className="flex items-center space-x-20">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="individual"
              />
              <span className="ml-2">Individual</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="enterprise"
              />
              <span className="ml-2">Enterprise</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="accountType"
                value="government"
              />
              <span className="ml-2">Government</span>
            </label>
          </div>
        </div>

        <div className="flex flex-row items-start mb-4 space-x-4">
          <div>
            <label className="text-gray-700 block text-sm font-bold mb-2">
              First Name:
            </label>
            <input
              className="shadow ml-[5px] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm italic mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <label className="text-gray-700 block text-sm font-bold mb-2">
              Last Name:
            </label>
            <input
              className="shadow ml-[5px] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email*:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
            name="email" // Add the name attribute
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm italic mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address*:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="Address"
            placeholder="Enter your Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 text-sm italic mt-1">{errors.address}</p>
          )}
        </div>

        <div className="flex flex-row items-start mb-4 space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country*:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && (
              <p className="text-red-500 text-sm italic mt-1">
                {errors.country}
              </p>
            )}
          </div>
          <div className="w-1/2 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State*:
            </label>
            <div className="relative">
              <select
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.state ? "border-red-500" : ""
                }`}
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select your state
                </option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm italic mt-1">
                  {errors.state}
                </p>
              )}
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
                  errors.state ? "stranslate translate-y-1" : ""
                }`}
              >
                <MdArrowDropDown
                  className="text-gray-500"
                  style={{ marginTop: "0.3rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center space-x-4">
          <div className="w-1/2 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pincode*:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your country"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm italic mt-1">
                {errors.pincode}
              </p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              city*:
            </label>
            <div className="relative">
              <select
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.state ? "border-red-500" : ""
                }`}
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select your city
                </option>
                <option value="state1">city 1</option>
                <option value="state2">city 2</option>
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm italic mt-1">
                  {errors.city}
                </p>
              )}
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
                  errors.city
                    ? "transform translate-y-1/2"
                    : "transform -translate-y-1/2"
                }`}
              >
                <MdArrowDropDown
                  className="text-gray-500"
                  style={{ marginTop: "0.3rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start mb-4 space-x-4">
          <div className="w-1/4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country Code:
            </label>
            <div className="relative">
              <select
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.countryCode ? "border-red-500" : ""
                }`}
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              {errors.countryCode && (
                <p className="text-red-500 text-sm italic mt-1">
                  {errors.countryCode}
                </p>
              )}
              <div
                className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ${
                  errors.countryCode
                    ? "transform translate-y-1/2"
                    : "transform -translate-y-1/2"
                }`}
              >
                <MdArrowDropDown
                  className="text-gray-500"
                  style={{ marginTop: "0.3rem" }}
                />
              </div>
            </div>
          </div>

          <div className="w-3/4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number:
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.countryCode && !formData.countryCode
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              placeholder="Enter your mobile number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4 flex items-center space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fax:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your Fax"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your Phone no"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm italic mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password:
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm italic mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="mb-4">
          <button
            type="button"
            onClick={handleLoginClick}
            className="bg-[#7FFFD4]  text-white font-bold py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default SignUp;
