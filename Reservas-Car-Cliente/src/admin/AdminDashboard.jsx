import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/Dashboard.css'; // Usa los mismos estilos o crea otros específicos para el admin

const AdminDashboard = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await axios.get('https://localhost:44309/api/Vehiculos');
        setVehiculos(response.data);
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
    };

    fetchVehiculos();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Administrar Vehículos</h2>
      <button className="agregar-vehiculo-button">
        <Link to="/admin/agregar-vehiculo">Agregar Nuevo Vehículo</Link>
      </button>
      <div className="vehiculos-grid">
        {vehiculos.map((vehiculo) => (
          <div key={vehiculo.id} className="vehiculo-card">
            <img src={`https://localhost:44309/${vehiculo.foto}`} alt={vehiculo.marca} className="vehiculo-photo" />
            <h3>{vehiculo.marca} {vehiculo.modelo}</h3>
            <p>{vehiculo.categoria}</p>
            <Link to={`/admin/editar-vehiculo/${vehiculo.id}`} className="editar-vehiculo-button">Editar Vehículo</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
