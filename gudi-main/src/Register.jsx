import React, { useState, useEffect } from 'react';
import "./Css/register.css";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import {
  validarEmail,
  validarTelefono,
  validarContrasena,
  verificarContrasenas,
  alertaRegistroExitoso,
  validarTexto,
  validarCedula
} from './validaciones';

function RegistroForm() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorTel, setErrorTel] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');
  const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState('');
  const [cedula, setCedula] = useState('');
  const [direccion, setDireccion] = useState('');
  const [errorNombre, setErrorNombre] = useState(''); // Nuevo estado para error de nombre
  const [errorApellido, setErrorApellido] = useState(''); // Nuevo estado para error de apellido
  const [errorCedula, setErrorCedula] = useState('');


  const handleEmailChange = (e) => {
    const nuevoEmail = e.target.value;
    setEmail(nuevoEmail);
    const error = validarEmail(nuevoEmail);
    setErrorEmail(error);
  };

  const handleNombreChange = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
    const mensajeError = validarTexto(nuevoNombre);
    setErrorNombre(mensajeError);
  };

  const handleApellidoChange = (e) => {
    const nuevoApellido = e.target.value;
    setApellido(nuevoApellido);
    const mensajeError = validarTexto(nuevoApellido);
    setErrorApellido(mensajeError);
  };


  const handleCedulaChange = (e) => {
    const nuevaCedula = e.target.value;
    setCedula(nuevaCedula);
    const mensajeError = validarCedula(nuevaCedula);
    setErrorCedula(mensajeError); // Actualiza el mensaje de error en el estado
};

  
  
  const handleTelefonoChange = (e) => {
    const nuevoTelefono = e.target.value;
    setTelefono(nuevoTelefono);
    const mensajeError = validarTelefono(nuevoTelefono);
    setErrorTel(mensajeError);
  };

  const handleContrasenaChange = (e) => {
    const nuevaContrasena = e.target.value;
    setContrasena(nuevaContrasena);
    const mensajeError = validarContrasena(nuevaContrasena);
    setErrorContrasena(mensajeError);
  };

  const handleConfirmarContrasenaChange = (e) => {
    const nuevaConfirmarContrasena = e.target.value;
    setConfirmarContrasena(nuevaConfirmarContrasena);
    const mensajeError = verificarContrasenas(contrasena, nuevaConfirmarContrasena);
    setErrorConfirmarContrasena(mensajeError);
  };

  useEffect(() => {
    // Recuperar datos de localStorage al cargar el componente
    const datosRecuperados = JSON.parse(localStorage.getItem('misDatos'));
    if (datosRecuperados) {
      console.log('Datos recuperados de localStorage:', datosRecuperados);
    }
  }, []);

  const handleRegistro = (e) => {
    e.preventDefault();
  
    if (!email || !telefono || !contrasena || !confirmarContrasena || !nombre || !apellido || !cedula || !direccion) {
      Swal.fire({
        toast: true,
        position: 'top-start',
        icon: 'error',
        title: 'Por favor, completa todos los campos.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      return;
 
    }
   ;
   

    const nuevoUsuario = { email, telefono, contrasena, nombre, apellido, cedula, direccion };
  
    const datosActuales = JSON.parse(localStorage.getItem('misDatos')) || { usuarios: [] };
    datosActuales.usuarios.push(nuevoUsuario);
  
    localStorage.setItem('misDatos', JSON.stringify(datosActuales));
    console.log('Datos actualizados en localStorage:', datosActuales);
  
    alertaRegistroExitoso();
  
    // Limpiar campos del formulario
    setEmail('');
    setTelefono('');
    setContrasena('');
    setConfirmarContrasena('');
    setNombre('');
    setApellido('');
    setCedula('');
    setDireccion('');
  };
  
  return (
    <div className="container">
      <div className="">
        <form onSubmit={handleRegistro}>
          {/* Campos para nombre, apellido, cédula y dirección */}

            <div className="input-box">
              <label>Nombre
                <input type="text" value={nombre} onChange={handleNombreChange} />
              </label>
              <p className="error-mensaje">{errorNombre}</p>
            </div>
          

            <div className="input-box">
              <label>Apellido
                <input type="text" value={apellido} onChange={handleApellidoChange} />
              </label>
              <p className="error-mensaje">{errorApellido}</p>
            </div>


            <div className="input-box">
              <label>Cédula
                  <input type="number" id="cedula" value={cedula} onChange={handleCedulaChange} />
              </label>
              <p className="error-mensaje">{errorCedula}</p>
          </div>
            <div className="input-box">
              <label>Dirección
              <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
              </label>
            </div>
      

            <div className="input-box">
              <label>Correo
                <input type="email" id="registroEmailInput" value={email} onChange={handleEmailChange} />
              </label>
              <p id="resultadoEmail">{errorEmail}</p>
            </div>

    
            <div className="input-box">
              <label>
                Teléfono
                <input
                  type="number"
                  value={telefono}
                  onChange={handleTelefonoChange}
                  id="telefono"
                />
              </label>
              <p id="resultadoTelefono">{errorTel}</p>
            </div>

            <div className="input-box">
              <label>
                Contraseña
                <input
                  type="password"
                  value={contrasena}
                  onChange={handleContrasenaChange}
                />
              </label>
              <p>{errorContrasena}</p>
             </div>
  

          <div className="input-box">
            <label>
              Confirmar Contraseña
              <input
                type="password"
                value={confirmarContrasena}
                onChange={handleConfirmarContrasenaChange}
              />
            </label>
            <p>{errorConfirmarContrasena}</p>
          </div>
          
          <div class="input-box button">
          <button type="submit">Registrarse</button>

          </div>
        </form>
        <Link to="/login">
                            <span className="link-name">Inicia Sesion</span>
       </Link>
      </div>
    </div>
  );
}

export default RegistroForm;
