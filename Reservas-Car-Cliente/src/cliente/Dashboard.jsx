import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../assets/styles/Dashboard.css'; // Asegúrate de añadir estilos en este archivo CSS
import vide1 from '../assets/video/index.mp4'
import vide2 from '../assets/video/index2.mp4'

export const Dashboard = () => {
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
      <div className="video-container">
        <div className='x'>
        <ReactPlayer controls={true} url={vide1} loop playing muted/>
        </div>
        <div className='x'>
        <ReactPlayer controls={true} url={vide2} loop playing muted/>
        </div>
        
        
      </div>
  
      <div className="filtro-container">
        <select
          className="filtro-categoria"
          onChange={(e) => {
            const categoriaSeleccionada = e.target.value;
            if (categoriaSeleccionada === "Todos") {
              fetchVehiculos();
            } else {
              const filteredVehiculos = vehiculos.filter(
                (vehiculo) => vehiculo.categoria === categoriaSeleccionada
              );
              setVehiculos(filteredVehiculos);
            }
          }}
        >
          <option value="Todos">Todos</option>
          <option value="Deportivos">Deportivos</option>
          <option value="4x4">4x4</option>
          <option value="Sedan">Sedan</option>
          <option value="Motos">Motos</option>
        </select>
      </div>
  
      <div className="vehiculos-grid">
        {vehiculos.map((vehiculo) => (
          <div key={vehiculo.id} className="vehiculo-card">
            <img src={`https://localhost:44309/${vehiculo.foto}`} alt={vehiculo.marca} className="vehiculo-photo" />
            <div className="vehiculo-info">
              <h3>{vehiculo.marca} {vehiculo.modelo}</h3>
              <p style={{color:"Black"}}>{vehiculo.categoria}</p>
              {vehiculo.disponibilidad > 0 ? (
                <span className="disponible">Disponible ({vehiculo.disponibilidad})</span>
              ) : (
                <span className="agotado">Agotado</span>
              )}
              <Link to={`/vehiculo/${vehiculo.id}`} className="ver-detalles-button">Ver Detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
