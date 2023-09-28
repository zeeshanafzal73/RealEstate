import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import login from "./../Static/img/login.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both username and password fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username,
        password,
      });

      if (response.status === 200) {
        // Check if a token is present in the response
        if (response.data.token) {
          // Store the token in your application (e.g., in local storage)
          localStorage.setItem("token", response.data.token);
          props.onLogin();
          // Redirect to the home page if login is successful
          navigate("/home");
        }
      } else {
        // Display an error message if login fails
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }

    // Clear the input fields
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={login} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={submitHandler}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-floating mx-1"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-success btn-floating mx-1"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-success btn-floating mx-1"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid Username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <br />
                  <br />
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/ResetPassword" className="text-body">
                      Forgot password?
                    </Link>
                  </div>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link to="/register" className="link-success">
                      Register
                    </Link>
                  </p>
                </div>
                {error && <p className="text-danger">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
