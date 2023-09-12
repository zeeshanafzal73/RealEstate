import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./components/Pages/About";
import { Property } from "./components/Pages/Property";
import { Blogs } from "./components/Pages/Blogs";
import { Contact } from "./components/Pages/Contact";
import { Search } from "react-bootstrap-icons";
import { Login } from "./components/Pages/Login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  // Function to handle login
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  // Function to handle logout
  handleLogout = () => {
   
      alert('Logged-out');
    
    
    localStorage.removeItem("token");
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        <Router>
          {isLoggedIn && <Navbar onLogout={this.handleLogout} />}
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  onLogin={this.handleLogin}
                  isLoggedIn={isLoggedIn} // Pass the isLoggedIn state to the Login component
                />
              }
            />
            {isLoggedIn && <Route path="/home" element={<Home />} />}
            <Route path="/about" element={<About />} />
            <Route path="/property" element={<Property />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          {isLoggedIn && <Footer />}
        </Router>
      </>
    );
  }
}
