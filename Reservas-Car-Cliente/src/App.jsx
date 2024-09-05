import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrearUsuario from './auth/CrearUsuario';
import Login from './auth/Login';
import { Dashboard } from './cliente/Dashboard';
import ClientNavbar from './cliente/Navbar';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import VehicleDetails from './cliente/VehicleDetails'; // Asegúrate de importar el nuevo componente
import ReservationForm from './cliente/ReservationForm';
import ReservasCliente from './cliente/ReservasCliente';
import VerPerfil from './auth/VerPerfil';
import EditarPerfil from './auth/EditarPerfil';
import AcercaDe from './cliente/AcercaDe';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/crear-cuenta" element={<CrearUsuario />} />
          
          {/* Rutas protegidas */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <ClientNavbar />
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/vehiculo/:id"  // Ruta dinámica para los detalles del vehículo
            element={
              <ProtectedRoute>
                <ClientNavbar />
                <VehicleDetails />  {/* Muestra los detalles del vehículo */}
              </ProtectedRoute>
            } 
          />

          <Route
            path="/reservas"
            element={
              <ProtectedRoute>
                <ClientNavbar />
                <ReservasCliente />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ver-perfil"
            element={
              <ProtectedRoute>
                <ClientNavbar />
                <VerPerfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editar-perfil"
            element={
              <ProtectedRoute>
                <ClientNavbar />
                <EditarPerfil />
              </ProtectedRoute>
            }
          />

          <Route
            path="/AcercaDe"
            element={
              <ProtectedRoute>
                <ClientNavbar />
                <AcercaDe />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
