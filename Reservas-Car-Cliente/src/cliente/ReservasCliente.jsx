import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext'; // Asegúrate de importar tu contexto de autenticación
import '../assets/styles/ReservasCliente.css'; // Asegúrate de agregar los estilos

const ReservasCliente = () => {
  const [reservas, setReservas] = useState([]);
  const { user } = useAuth(); // Obtener el usuario autenticado

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get("https://localhost:44309/api/Reservas/ReservasUsuario?id="+user.id);
        setReservas(response.data);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchReservas();
  }, [user.id]);

  return (
    <div className="reservas-container">
      <h2>Mis Reservas</h2>
      {reservas.length === 0 ? (
        <p>No tienes reservas aún.</p>
      ) : (
        <div className="reservas-grid">
          {reservas.map((reserva) => (
            <div key={reserva.reservas.id} className="reserva-card">
              <img src={`https://localhost:44309/${reserva.vehiculos.foto}`} alt={reserva.vehiculos.marca} className="vehiculo-photo" />
              <div className="reserva-info">
                <h3>{reserva.vehiculos.marca} {reserva.vehiculos.modelo}</h3>
                <p style={{color:"black"}}><strong>Fecha de Inicio:</strong> {reserva.reservas.fechaInicio}</p>
                <p style={{color:"black"}}><strong>Fecha de Fin:</strong> {reserva.reservas.fechaFin}</p>
                <p style={{color:"black"}}><strong>Monto:</strong> ${reserva.reservas.monto.toFixed(2)}</p>
              </div>
              <div className={`estado-badge ${getEstadoClass(reserva.reservas.estado)}`}>
                {reserva.reservas.estado}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Función para obtener la clase CSS basada en el estado de la reserva
const getEstadoClass = (estado) => {
    switch (estado) {
      case 'Reservado':
        return 'estado-reservado'; // Gris
      case 'Cancelado':
        return 'estado-cancelado'; // Rojo
      case 'Comprado for you <3':
        return 'estado-comprado'; // Verde
      default:
        return '';
    }
  };

export default ReservasCliente;
