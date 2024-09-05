import React from 'react';
import '../assets/styles/AcercaDe.css'; // Asegúrate de crear un archivo CSS para los estilos

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <h2>Acerca de</h2>
      <p style={{color:"black"}}>
        Este proyecto es para la materia de Sistemas de Información III. Es un sistema para reservas de autos en una confección. 
        Consume una API hecha en ASP.NET Core y gestiona el control de usuarios, vehículos y reservas.
      </p>
      <div className="integrantes">
        <h3>Integrantes del Grupo</h3>
        <ul>
          <li>Daniel Mancilla</li>
          <li>Victor Saldaña</li>
          <li>Santiago Tapia</li>
          <li>Jesus Seballos</li>
          <li>Emanuel Andrade</li>
        </ul>
      </div>
      <div className="foto-container">
        <img 
          src="https://www.upds.edu.bo/wp-content/uploads/2022/10/cambio-climatico.jpg" 
          alt="Descripción de la foto" 
          className="foto-ancha" 
        />
      </div>
    </div>
  );
};

export default AcercaDe;
