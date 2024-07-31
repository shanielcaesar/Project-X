import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Citizens from "./components/Citizens";
import Students from "./components/Students";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/citizens-record"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Citizens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students-record"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Students
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/citizens-record" element={<Citizens />} />
        <Route path="/students-record" element={<Students />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>HELLOOO</h1>
    </div>
  );
}

export default App;
