import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage"; // Import the new Homepage component
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "./Admin";
import About from "./About";
import Events from "./Events";
import ParticipatingData from "./ParticipatingData";


function App() {
    return (
        <Router>
            <div>
                {/* <h1>Authentication App</h1> */}
                <Routes>
                    <Route path="/" element={<Homepage />} /> {/* Update to render Homepage */}
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/participatingData" element={<ParticipatingData />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;








