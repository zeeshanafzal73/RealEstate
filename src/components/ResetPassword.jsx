import React, { useState } from "react";
import register from "./Static/img/reg.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/password_reset/",
        {
          username: username,
          password: password,
          password2: password2,
        }
      );

      if (response.status === 200) {
        setMessage(response.data.message);
        setError("");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("");
      setError("An error occurred while processing your request.");
    }
    setUsername("");
    setPassword("");
    setPassword2("");
  };
  return (
    <>
      <section className="vh-50" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Password Reset
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={submitHandler}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="Username"
                              value={username}
                              required
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="Username">
                              Username
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="Password"
                              value={password}
                              required
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="Password">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password2"
                              value={password2}
                              required
                              onChange={(e) => {
                                setPassword2(e.target.value);
                              }}
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="password2">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-success btn-lg"
                            style={{
                              paddingLeft: "2.5rem",
                              paddingRight: "2.5rem",
                            }}
                          >
                            Reset
                          </button>
                        </div>
                      </form>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Login account?
                        <Link to="/" className="link-success">
                          Login
                        </Link>
                      </p>
                      {message && <p className="text-success">{message}</p>}
                      {error && <p className="text-danger">{error}</p>}
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={register}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
