import React, { useState } from "react";
import banner from './assets/images/imagenCafe.PNG';
import "./Login.css";
import axios from "axios";
import "./assets/fonts/IndieFlower.ttf";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

function Login(props) {
  const [login, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        login,
        password,
      };
      const response = await axios.post(
        "http://localhost:3001/login",
        formData
      );

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        window.location.href = "/";
      }
      console.log("Login successful!");
      navigate('/cafes');
    } catch (error) {
      console.error("Login failed", error.message);
      setErrorMessage(
        <FormattedMessage id="MensajeError"/>
      );
    }
  };

  return (
    <div>
    <div class="font-face"> El aroma magico </div>
    <hr />
    <img class="image-banner" src={banner} alt="Logo" />
    <hr />
    <h3 className="Auth-form-title"><FormattedMessage id="InicioSesion"/></h3>
      <div className="Auth-form-container h-50">
        <form className="Auth-form border border-dark" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <div className="form-group mt-3 text-left">
              <label class="label-resized"><FormattedMessage id="Usuario"/></label>
              <input
                type="text"
                className="form-control mt-1"
                value={login}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3 text-left">
              <label class= "label-resized"><FormattedMessage id="Contrasena"/></label>
              <input
                type="password"
                className="form-control mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-success">
              <FormattedMessage id="Ingresar"/>
              </button>
              <button type="reset" className="btn btn-danger">
              <FormattedMessage id="Cancelar"/>
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
            </p>
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;