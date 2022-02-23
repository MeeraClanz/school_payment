import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../component/Header";
import "../CSS/Admin.css";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import Upload from "../images/upload.png";
import Hand from "../images/hand-emoji.png";
import Pay from "../images/pay.png";
import Card from "react-bootstrap/Card";
import { Button, Container, Nav, Navbar, CardGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Admin() {
  const [Users, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://sangeetha.npkn.net/school-payment")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        fetchUsers(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <div className="AdminBox">
        <Navbar>
          <Container>
            <div className="left">
              <Navbar.Brand>
                <span className="Hello">Hello</span>
                <span className="Admin">Admin !!!</span>
                <img src={Hand} className="Hand" />
              </Navbar.Brand>
            </div>
            <div className="right">
              <Navbar.Collapse className="justify-content-end">
                <img src={Delete} className="Delete" />
                <img src={Edit} className="Delete" />
                <img src={Upload} className="Upload" />
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        <div className="line"></div>

        <div className="Webview">
          <div className="web">
            <CardGroup>
              <Card className="cardHeader">
                <Card.Header>
                  <large>Student Name</large>
                </Card.Header>
              </Card>
              <Card className="cardHeader">
                <Card.Header>
                  <large>Parent Name</large>
                </Card.Header>
              </Card>
              <Card className="cardHeader">
                <Card.Header>
                  <large>Parent Number</large>
                </Card.Header>
              </Card>
              <Card className="cardHeader">
                <Card.Header>
                  <large>Standard</large>
                </Card.Header>
              </Card>
              <Card className="cardHeader">
                <Card.Header>
                  <large>Amount Payable</large>
                </Card.Header>
              </Card>
              <Card className="cardHeader">
                <Card.Header>
                  <large>Status</large>
                </Card.Header>
              </Card>
            </CardGroup>
          </div>
          {Users.map((item) => (
            <CardGroup className="webCardGroup">
              <Card className="cardBody">
                <Card.Body> {item.StudentName}</Card.Body>{" "}
              </Card>
              <Card className="cardBody">
                <Card.Body> {item.ParentName}</Card.Body>{" "}
              </Card>
              <Card className="cardBody">
                <Card.Body> {item.ParentNumber}</Card.Body>{" "}
              </Card>
              <Card className="cardBody">
                <Card.Body> {item.Standard}</Card.Body>{" "}
              </Card>
              <Card className="cardBody">
                <Card.Body> {item.AmountPayable}</Card.Body>{" "}
              </Card>
              <Card className="cardBody">
                <Card.Body>
                  {" "}
                  <img src={Pay} className="Pay" />
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
        </div>

        <div className="Mobileview">
          <Row xs={1} md={4} className="g-3">
            {Users.map((item) => (
              <Col>
                <Card className="Mobile">
                  <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="6">
                        Student Name
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="Meera"
                          className="value"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="6">
                        Parent Name
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="Rammohan"
                          className="value"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="6">
                        Parent Number
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="7402102127"
                          className="value"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="6">
                        Standard
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="8th"
                          className="value"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="6">
                        Amount Payable
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="5000"
                          className="value"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="6">
                        Status
                      </Form.Label>
                      <Col sm="6">
                        <img src={Pay} className="Pay" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Admin;
