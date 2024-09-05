import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import '../assets/styles/Navbar.css'; // Usa los mismos estilos o crea otros específicos para el admin

const AdminNavbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-brand">
        <Link to="/admin/dashboard">Vehículos</Link>
      </div>
      <div className="navbar-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/reservas">Administrar Reservas</Link>
      </div>
      <div className="navbar-user">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
