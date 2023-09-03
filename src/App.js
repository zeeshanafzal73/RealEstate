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
    // Initialize the state with isLoggedIn set to false
    this.state = {
      isLoggedIn: false,
    };
  }

  // Function to handle login
  handleLogin = () => {
    // Set isLoggedIn to true when the user logs in
    this.setState({ isLoggedIn: true });
  };

  // Function to handle logout
  handleLogout = () => {
    // Set isLoggedIn to false when the user logs out
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <>
        <Router>
          {/* Conditionally render the Login component if not logged in */}
          {!isLoggedIn && <Login onLogin={this.handleLogin} />}
          {isLoggedIn && (
            <Navbar onLogout={this.handleLogout} />
          )}
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/property" element={<Property />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          {/* Conditionally render the Footer */}
          {isLoggedIn && <Footer />}
        </Router>
      </>
    );
  }
}
