

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import NavScrollExample from "./NavScrollExample";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      console.log("Signup successful:", res.data);
      navigate("/login"); // Redirect to Login after signup
    } catch (err) {
      console.error("Signup error:", err.response.data.message);
    }
  };

  return (
    <>
    <NavScrollExample/>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Signup
          </button>
        </form>
        <p className="login-prompt">
          Already registered?{" "}
          <Link to="/login" className="login-link">
            Login here
          </Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
