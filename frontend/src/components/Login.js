

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import NavScrollExample from "./NavScrollExample";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      console.log("Login successful:", res.data);
      navigate("/dashboard"); // Redirect to Dashboard after login
    } catch (err) {
      console.error("Login error:", err.response.data.message);
    }
  };

  return (
    <>
    <NavScrollExample/>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p className="signup-prompt">
          Not registered yet?{" "}
          <Link to="/signup" className="signup-link">
            Signup here
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
