import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import Nav from "./components/Nav";
import CardList from "./components/CardList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
