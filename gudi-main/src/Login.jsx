import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login({ onLoginSuccess }) { 
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    // Estado para manejar si el usuario está logueado
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleContrasenaChange = (e) => {
        setContrasena(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Obtener los usuarios del localStorage
        const datosGuardados = JSON.parse(localStorage.getItem('misDatos'));
        if (datosGuardados && datosGuardados.usuarios) {
            const usuarioEncontrado = datosGuardados.usuarios.find(
                (usuario) => usuario.email === email && usuario.contrasena === contrasena
            );

            if (usuarioEncontrado) {
               
                Swal.fire({
                    icon: 'success',
                    title: 'Sesion iniciada',
                    toast: true,
                    position: 'top-start',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
                }     
                }).then(() => {
                    navigate('/dashboard'); // Navega a la página de inicio
                    onLoginSuccess(true)
                  });
            } else {
                setError("Correo electrónico o contraseña incorrecta.");
            }
        } else {
            setError("No hay usuarios registrados.");
        }
    };

    return (
        <div className="container-full-height" >
            <div className="login container">
             <div className="form-container">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleLogin}>
                        <div className='input-box'>
                            <label>Correo Electrónico</label>
                            <input type="email" value={email} onChange={handleEmailChange} />
                        </div>

                        <div className='input-box'>
                            <label>Contraseña</label>
                            <input type="password" value={contrasena} onChange={handleContrasenaChange} />
                        </div>
                        {error && <p>{error}</p>}
                        
                
                        <div class="input-box button">
                        <button type="submit">Iniciar Sesión</button>
                        </div>
                    </form>
                    <Link to="/register">
                            <span className="link-name">No tienes cuenta? Registrate</span>
                        </Link>
                </div>
            </div>
            
        </div>
        
    );
}

export default Login;
