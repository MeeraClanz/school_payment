import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Headerlogo from "../images/Headerlogo.png";
import Headerprofile from "../images/Headerprofile.png";
import Unlock from "../images/unlock.png";
import Power from "../images/power.png";
import background from "./background.png";
import "../CSS/Header.css";
import { NavDropdown, NavItem, Logout } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="headerbar">
        <Container>
          <Navbar.Brand>
            {" "}
            <img src={Headerlogo} className="Headerlogo" />
          </Navbar.Brand>

          <NavDropdown
            title={
              <div>
                <img className="Headerprofile" src={Headerprofile} />
              </div>
            }
          >
            <NavDropdown.Item>
              <img className="unlock" src={Unlock} />
              Change Password
            </NavDropdown.Item>
            <NavDropdown.Divider className="Divider" />
            <NavDropdown.Item>
              <img className="unlock" src={Power} />
              {/* Logout */}
              <Link to="/" className="logout">
                Logout
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
