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
        {isLoggedIn && <Route path="/about" element={<About />} />}
        {isLoggedIn && <Route path="/property" element={<Property />} />}
        {isLoggedIn && <Route path="/blogs" element={<Blogs />} />}
        {isLoggedIn && <Route path="/contact" element={<Contact />} />}
        {isLoggedIn && <Route path="/search" element={<Search />} />}
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}
