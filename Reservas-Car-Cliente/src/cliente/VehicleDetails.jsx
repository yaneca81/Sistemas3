import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/VehicleDetails.css';
import ReservationForm from './ReservationForm';

const VehicleDetails = () => {
  const { id } = useParams();  // Obtener el ID de los parámetros de la URL
  const [vehiculo, setVehiculo] = useState(null);
  const [loading, setLoading] = useState(true); // Agregar un estado de carga
  const [error, setError] = useState(null); // Agregar un estado de error

  useEffect(() => {
    const fetchVehiculo = async () => {
      try {
        const response = await axios.get(`https://localhost:44309/api/Vehiculos/${id}`);
        setVehiculo(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los detalles del vehículo');
        setLoading(false);
      }
    };

    fetchVehiculo();
  }, [id]);

  // Mostrar un indicador de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Mostrar un mensaje de error si ocurrió un problema al cargar los datos
  if (error) {
    return <div>{error}</div>;
  }

  if (!vehiculo) return <div>No se encontraron los detalles del vehículo</div>;

  return (
    <div className="vehiculo-details-container">
      <img src={`https://localhost:44309/${vehiculo.foto}`} alt={vehiculo.marca} className="vehiculo-photo-large" />
      <h2>{vehiculo.marca} {vehiculo.modelo}</h2>
      <p><strong>Categoria:</strong> {vehiculo.categoria}</p>
      <p><strong>Gama:</strong> {vehiculo.gama}</p>
      <p><strong>Puertas:</strong> {vehiculo.puertas}</p>
      <p><strong>Tracción:</strong> {vehiculo.traccion}</p>
      <p><strong>Capacidad de Carga:</strong> {vehiculo.capacidadCarga}</p>
      <p><strong>Cilindrada:</strong> {vehiculo.cilindrada}</p>
      <p><strong>Procedencia:</strong> {vehiculo.procedencia}</p>
      <p><strong>Descripción:</strong> {vehiculo.descripcion}</p>
      <p><strong>Precio:</strong> ${vehiculo.precio}</p>
      <p><strong>Color:</strong> {vehiculo.color}</p>
      <p className={vehiculo.disponibilidad > 0 ? "disponible" : "agotado"}>
        {vehiculo.disponibilidad > 0 ? "Disponible" : "Agotado"}
      </p>

      <h3>Reservar este Vehículo</h3>
      {/* Aquí podrías añadir un formulario de reserva si es necesario */
        <ReservationForm vehiculo={vehiculo} />
      }
    </div>
  );
};

export default VehicleDetails;
