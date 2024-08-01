import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Citizens from "./components/Citizens";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li className="logo">
            <img src="/images/chrome.png" alt="Concepcion Logo" />
          </li>
          <li>
            <NavLink
              to="/"
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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizens-record" element={<Citizens />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>HELLOOOOOOOOOOOOOOOOOOOO!!!!!!</h1>
    </div>
  );
}

export default App;
