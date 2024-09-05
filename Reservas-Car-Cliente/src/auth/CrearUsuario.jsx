import React, { useState } from "react";
import axios from "axios";
import '../assets/styles/CrearUsuario.css';
import { Toaster, toast } from 'sonner'
import { useNavigate } from "react-router-dom";

const CrearUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    user: "",
    password: "",
    email: "",
    telefono: "",
    direccion: "",
    //Foto: ""  // Aquí almacenaremos la ruta de la foto
  });

  const navigate = useNavigate();
  const [file, setFile] = useState(null);  // Para manejar la foto seleccionada

  // Manejar los cambios en el formulario
  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // Manejar la selección del archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Función para subir la foto al backend
  const uploadPhoto = async () => {
    const formData = new FormData();
    formData.append("Archivo", file);  // El nombre "Archivo" debe coincidir con el nombre en el backend

    try {
      const response = await axios.post("https://localhost:44309/api/Usuarios/GuardarImagen", formData);
      return response.data;  // La ruta de la imagen devuelta por el backend
    } catch (error) {
      console.error("Error al subir la foto:", error);
      return null;
    }
  };

  // Función para crear el usuario
  const crearUsuario = async (e) => {
    e.preventDefault();

    // Subir la imagen primero
    const rutaFoto = await uploadPhoto();
    if (!rutaFoto) {
      alert("Error al subir la foto.");
      return;
    }

    // Preparar el objeto de usuario con la ruta de la foto y rol asignado

    //console.log("-------->" + rutaFoto);
    
    const nuevoUsuario = {
      ...usuario,
      Foto: rutaFoto,  // Asignar la ruta de la foto a la propiedad Foto
      id_roles: 2  // Asignar el rol con ID 2
    };

    try {
      // Enviar el usuario al backend
      await axios.post("https://localhost:44309/api/Usuarios", nuevoUsuario);
      toast.success("Usuario "+nuevoUsuario.user + " registrado exitosamente");
      setTimeout(() => {
        navigate("/login");
      }, 2000); 
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      toast.error("Hubo un error al crear el usuario.");
    }
  };

  return (
    <div className="crear-usuario-background">
      <div className="crear-usuario-container">
        <h2 style={{color : "white"}}>Crear Usuario</h2>
        <form onSubmit={crearUsuario}>
          <div className="input-row">
            <div className="input-group">
              <label>Nombre:</label>
              <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Apellido:</label>
              <input type="text" name="apellido" value={usuario.apellido} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Usuario:</label>
              <input type="text" name="user" value={usuario.user} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Contraseña:</label>
              <input type="password" name="password" value={usuario.password} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Email:</label>
              <input type="email" name="email" value={usuario.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Teléfono:</label>
              <input type="tel" name="telefono" value={usuario.telefono} onChange={handleChange} required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Dirección:</label>
              <input type="text" name="direccion" value={usuario.direccion} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Foto de Perfil:</label>
              <input type="file" onChange={handleFileChange} required />
            </div>
          </div>
          <Toaster position="top-center" richColors/>
          <button type="submit" className="crear-usuario-button">Crear Usuario</button>
        </form>
        <button className="switch-button" onClick={() => navigate("/login")}>Volver al Login</button>
      </div>
    </div>
  );
    
};

export default CrearUsuario;
