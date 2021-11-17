import React from "react";

import { Link, useHistory } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/cripto-logo.png";

const CoinNav = ({ actualizarData }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none text-dark" to="/">
            <img alt="" src={logo} className="img-logo" />
            CriptoCoin
          </Link>
        </Navbar.Brand>
        <div className="d-flex">
          {actualizarData && (
            <div className="me-2">
              <button className="btn btn-coin" onClick={actualizarData}>
                Actualizar
              </button>
            </div>
          )}

          <div>
            <button className="btn btn-coin" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default CoinNav;
