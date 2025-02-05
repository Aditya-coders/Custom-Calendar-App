// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//     return (
//         <Router>
//             <div>
//                 <h1>Authentication App</h1>
//                 <Routes>
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<Signup />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;











import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import "./App.css"

function App() {
    return (
        <Router>
            <div>
                <h1>Authentication App</h1>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/signup" />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;





