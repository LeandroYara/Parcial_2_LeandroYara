import React, { useState } from "react";
import banner from './assets/images/imagenCafe.PNG';
import "./Login.css";
import axios from "axios";
import "./assets/fonts/IndieFlower.ttf"

function Login(props) {
  const [login, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    } catch (error) {
      console.error("Login failed", error.message);
      setErrorMessage(
        "Usuario o contraseña incorrectos. Por favor intente de nuevo."
      );
    }
  };
  return (
    <div>
      <h1 style={{ font_family: "IndieFlower" }}> El aroma magico </h1>
      <img src={banner} alt="Logo" class="img-responsive center-block" />
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Inicia sesión</h3>
            <div className="form-group mt-3">
              <label>Usuario </label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ingresa tu usuario"
                value={login}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
            </p>
            {errorMessage && <div className="text-warning">{errorMessage}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;