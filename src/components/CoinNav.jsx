import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/cripto-logo.png";

const CoinNav = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img alt="logo" src={logo} className="img-logo" />
          <span>
            <b>CriptoCoin</b>
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CoinNav;
