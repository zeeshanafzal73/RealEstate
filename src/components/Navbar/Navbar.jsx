import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default class Navbar extends Component {
  state = {
    isSearchVisible: false,
  };

  toggleSearch = () => {
    this.setState({ isSearchVisible: !this.state.isSearchVisible });
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div className="container">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link className="navbar-brand text-brand" to="/home">
              Estate<span className="color-b">Agency</span>
            </Link>

            <div
              className="navbar-collapse collapse justify-content-center"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/property">
                    Property
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/blogs">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/contact">
                    Contact
                  </Link>
                </li> 
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
              onClick={this.toggleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {this.state.isSearchVisible && <Search />}
          </div>

          <div className="nav-item">
            <Link className="nav-link " to="/" onClick={this.props.onLogout}>
              Logout
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
