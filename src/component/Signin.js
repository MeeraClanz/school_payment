import React, { component } from "react";
import "../CSS/Signin.css";
import Mainlogo from "../images/Mainlogo.png";
import Rocket from "../images/Rocket.png";
import usericon from "../images/user-icon.png";
import lockicon from "../images/lock-icon.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const initialvalues = { username: "", password: "" };
  const [formValues, setFormvalues] = useState(initialvalues);
  const [fromErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(fromErrors);
    if (Object.keys(fromErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [fromErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <>
      <div className="signinbackground">
        <div className="box">
          <div className="insidebox">
            <div className="center">
              <img src={Mainlogo} className="Mainlogo" />
              <img src={Rocket} className="Rocket" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter your User Name"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <img src={usericon} className="usericon" />
              </div>
              <p>{fromErrors.username}</p>
              <div className="form-group">
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <img src={lockicon} className="lockicon" />
              </div>
              <p>{fromErrors.password}</p>
              <div className="Forgot">
                <a href="#" className="Forgot-password">
                  Forgot password?
                </a>
                {/* <button className="Signinbutton">Sign In</button> */}
                <Link to="/Admin">
                  <button type="button" className="Signinbutton">
                    Sign In
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
