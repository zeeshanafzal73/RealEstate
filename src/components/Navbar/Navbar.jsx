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
            <a className="navbar-brand text-brand" href="index.html">
              Estate<span className="color-b">Agency</span>
            </a>

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

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item " to="/property-single">
                      Property Single
                    </Link>
                    <Link className="dropdown-item " to="/property-single">
                      Blog Single
                    </Link>

                    <Link className="dropdown-item " to="/agents-grid">
                      Agents Grid
                    </Link>
                    <Link className="dropdown-item " to="/agent-single">
                      Agent Single
                    </Link>
                  </div>
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
          <ul>
              <div className="nav-item">
              <Link className="nav-link " to="/" onClick={this.props.onLogout}>
                Logout
              </Link>
            </div>
            </ul>
        </nav>
      </>
    );
  }
}
