import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// Importa tus componentes de Login y Registro
import Login from './Login'
import Registro from './Register';
import Servicios from './Servicios';
import ServicioAdd from './ServicioAdd';
import Estudiantes from './Estudiantes';
import EstudianteAdd from './EstudianteAdd';
import Dashboard from './Dashboard';
import Home from './Home';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Esta función ahora recibe un valor booleano
  const handleLoginState = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 

  };
  return (
      <BrowserRouter>

            <Routes>
              <Route path="/login" element={<Login onLoginSuccess={() => handleLoginState(true)} />} />
              <Route path="/register" element={<Registro />} />
              <Route path="/" element={<Home />} />

              <Route path="/servicios" element={<Servicios />} />
              <Route path="/servicios-add" element={<ServicioAdd />} />
              <Route path="/estudiante" element={<Estudiantes />} />
              <Route path="/estudiante-add" element={<EstudianteAdd />} />
              <Route path="/dashboard" element={<Dashboard />} />





            </Routes>
          </BrowserRouter>
  );
}

export default App;
