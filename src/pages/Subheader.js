import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../component/Header";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import Upload from "../images/upload.png";
import Hand from "../images/hand-emoji.png";
import { Container, Navbar } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function Subheader() {
  return (
    <>
      <Header />

      <div className="AdminBox">
        <Navbar>
          <Container>
            <Navbar.Brand>
              <span className="Hello">Hello</span>
              <span className="Admin">Admin !!!</span>
              <img src={Hand} className="Hand" />
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
              <img src={Delete} className="Delete" />
              <img src={Edit} className="Delete" />
              <img src={Upload} className="Upload" />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="line"></div>
      </div>
    </>
  );
}

export default Subheader;
