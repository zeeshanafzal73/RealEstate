import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./components/Pages/About";
import { Property } from "./components/Pages/Property";
import { Blogs } from "./components/Pages/Blogs";
import { Contact } from "./components/Pages/Contact";
import { Search } from "react-bootstrap-icons";
import { Login } from "./components/Pages/Login";
import { SingleAgent } from "./components/SingleAgent";
import { SingleProperty } from "./components/SingleProperty";
import { SingleNews } from "./components/SingleNews";
import { SingleTeam } from "./components/SingleTeam";
import { Agents } from "./components/Agents";
import { Register } from "./components/Pages/Register";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(localStorage.getItem("token"));
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(null);
  };

  // Use useEffect to check token status when the app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token);
  }, []);

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/property" element={<Property />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/SingleAgent/:aid" element={<SingleAgent />} />
        <Route path="/SingleProperty/:pid" element={<SingleProperty />} />
        <Route path="/SingleNews/:nid" element={<SingleNews/>}/>
        <Route path="/SingleTeam/:tid" element={<SingleTeam/>}/>
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}
