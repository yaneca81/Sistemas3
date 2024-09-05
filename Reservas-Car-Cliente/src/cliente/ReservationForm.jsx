import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'

const ReservationForm = ({ vehiculo }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardValid, setCardValid] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryValid, setExpiryValid] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));  // Asumiendo que el usuario está guardado en localStorage
  const navigate = useNavigate();  // Hook para navegar a otra ruta

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    const { isValid, type } = validateCard(value);
    setCardValid(isValid);
    setCardType(type);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    setExpiryDate(value);
    setExpiryValid(validateExpiryDate(value));
  };

  const validateCard = (number) => {
    let T = ""; let par = 0, impar = 0, X = "";
    if (!number.match(/^\d+$/)) return { isValid: false, type: "" };
    if (number.length < 14 || number.length > 19) return { isValid: false, type: "" };

    for (let c = 0; c < number.length; c += 2) {
      X = String(parseInt(number[c]) * 2);
      if (X.length === 2) {
        par += (parseInt(X[0]) + parseInt(X[1]));
      } else par += parseInt(X);
    }
    for (let c = 1; c < number.length; c += 2) {
      impar += parseInt(number[c]);
    }
    if ((par + impar) % 10 !== 0) return { isValid: false, type: "" };

    let type = "";
    if (parseInt(number.substring(0, 2)) > 49 && parseInt(number.substring(0, 2)) < 56) type = "MasterCard";
    if (number.startsWith("34") || number.startsWith("37")) type = "American Express";
    if (number.startsWith("4")) type = "VISA";
    if (["60", "62", "64", "65"].includes(number.substring(0, 2))) type = "Discover";

    return { isValid: true, type: type };
  };

  const validateExpiryDate = (date) => {
    const today = new Date();
    const [year, month] = date.split('-');
    const expiry = new Date(`${year}-${month}-01`);
    return expiry > today;
  };

  const Disponible = () => {
    return vehiculo.disponibilidad > 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      fechaInicio: new Date().toISOString().split('T')[0],
      fechaFin: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      estado: "Reservado",
      monto: vehiculo.precio * 0.3,
      nroTarjeta: cardNumber,
      vencimientoTarjeta: `${expiryDate}-01`,
      id_usuario: user.id,
      id_vechiculo: vehiculo.id,
    };

    try {
      if (Disponible()) {
        const response = await axios.post('https://localhost:44309/api/Reservas', reservationData);
        if (response.status === 200) {
          toast.success('Reserva realizada con éxito.');
          navigate('/dashboard');  // Redirigir al dashboard después de la reserva exitosa
        }
      } else {
        toast.error("Este vehiculo está agotado");
      }
    } catch (error) {
      toast.error('Hubo un error al realizar la reserva.');
      console.error('Error al reservar:', error);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label>
        Fecha de Inicio:
        <input type="text" value={new Date().toISOString().split('T')[0]} readOnly />
      </label>
      <label>
        Fecha de Fin:
        <input type="text" value={new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]} readOnly />
      </label>
      <label>
        Monto:
        <input type="text" value={`$${(vehiculo.precio * 0.3).toFixed(2)}`} readOnly />
      </label>
      <label>
        Número de Tarjeta:
        <input 
          type="text" 
          value={cardNumber} 
          onChange={handleCardNumberChange} 
          className={cardValid ? 'valid' : 'invalid'} 
        />
        {cardValid && <span className="card-type">{cardType}</span>}
      </label>
      <label>
        Vencimiento Tarjeta:
        <input 
          type="month" 
          value={expiryDate} 
          onChange={handleExpiryDateChange} 
          className={expiryValid ? 'valid' : 'invalid'} 
        />
      </label>
      <Toaster position="top-center" richColors/>
      <button type="submit" disabled={!cardValid || !expiryValid}>
        Reservar
      </button>
    </form>
  );
};

export default ReservationForm;
