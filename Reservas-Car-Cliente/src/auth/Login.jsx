import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import '../assets/styles/Login.css';
import { Toaster, toast } from 'sonner'

const Login = () => {
  const [loginData, setLoginData] = useState({
    userOrEmail: "",
    password: ""
  });

  const { login } = useAuth(); // Usamos el contexto de autenticación
  const navigate = useNavigate();

  // Manejar los cambios en el formulario
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:44309/api/Usuarios/Login", loginData);
      if (response.data) {
        toast.success("Ingresando");

        // Guardar los datos del usuario en el contexto de autenticación y localStorage
        login(response.data);
        
        // Redirigir al Dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Credenciales incorrectas, intente de nuevo");
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Redirigir a la página de creación de cuenta
  const goToCrearCuenta = () => {
    navigate("/crear-cuenta");
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 style={{color:"white"}}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Usuario o Email:</label>
            <input
              type="text"
              name="userOrEmail"
              value={loginData.userOrEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        <button className="switch-button" onClick={goToCrearCuenta}>Crear Cuenta</button>
      </div>
    </div>
  );
  
};

export default Login;
