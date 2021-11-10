import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import logo from "../assets/cripto-logo.png";

const LoginScreen = () => {
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const auth = localStorage.getItem("auth") || null;
    if (auth) {
      history.push("/");
    }
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("pepito");

    localStorage.setItem("auth", true);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row card-login">
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="d-flex justify-content-center py-3 bg-light">
              <img src={logo} className="card-img-top" alt="logo" />
            </div>

            <div className="card-body">
              <h5 className="card-title text-center">Inicio de sesión</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>
                    <b>Correo electrónico</b>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@example.com.ar"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Contraseña</b>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-coin">Iniciar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
