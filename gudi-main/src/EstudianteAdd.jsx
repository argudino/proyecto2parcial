import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import "./Css/dashboard.css";

const EstudianteAdd = () => {
    const [estudianteData, setEstudianteData] = useState({
        nombreCompleto: '',
        facultad: '',
        carrera: '',
        telefono: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEstudianteData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que no haya campos vacíos
        const camposVacios = Object.values(estudianteData).some(x => x === '');
        if (camposVacios) {
            Swal.fire('Por favor, completa todos los campos', '', 'error');
            return;
        }

        // Guardar los datos en localStorage
        const datosGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
        datosGuardados.push(estudianteData);
        localStorage.setItem('estudiantes', JSON.stringify(datosGuardados));

        Swal.fire('Estudiante añadido exitosamente', '', 'success');
        
        // Resetear el formulario
        setEstudianteData({
            nombreCompleto: '',
            facultad: '',
            carrera: '',
            telefono: '',
            email: ''
        });
    };

    return (
        <div className="dashboard">
        <nav>
            <div className="logo-name">
                <span className="logo_name">DBU</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <Link to="/dashboard">
                            <span className="link-name">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/estudiante">
                            <span className="link-name">Estudiantes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicios">
                            <span className="link-name">Servicios</span>
                        </Link>
                    </li>
                </ul>

                <ul className="logout-mode">
                    <li>
                        <Link to="/">
                            <span className="link-name">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
            <section className="dashboard">
                <div className="top">
                    <div className="search-box">
                        {/* Icono de búsqueda (puede ser un componente de React o un SVG) */}
                        <input type="text" placeholder="Search here..."/>
                    </div>
                </div>

            <div className="dash-content">
                <div className="title">
                    <div className="text">Añadir Estudiante</div>
                </div>
                <div className="user-form">
                    <form id="registroForm" onSubmit={handleSubmit}>
                        <div className="row">
                            {/* Campo para el nombre completo */}
                            <div className="form-group col-md-4">
                                <label htmlFor="nombreCompleto">Nombre Completo</label>
                                <input type="text" className="form-control" id="nombreCompleto" name="nombreCompleto" placeholder="Ingrese el nombre completo" value={estudianteData.nombreCompleto} onChange={handleChange} />
                            </div>

                            {/* Campo para la facultad */}
                            <div className="form-group col-md-4">
                                <label htmlFor="facultad">Facultad</label>
                                <input type="text" className="form-control" id="facultad" name="facultad" placeholder="Ingrese el nombre de la facultad" value={estudianteData.facultad} onChange={handleChange} />
                            </div>

                            {/* Campo para la carrera */}
                            <div className="form-group col-md-4">
                                <label htmlFor="carrera">Carrera</label>
                                <input type="text" className="form-control" id="carrera" name="carrera" placeholder="Ingrese la carrera" value={estudianteData.carrera} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            {/* Campo para el teléfono */}
                            <div className="form-group col-md-4">
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="Ingresa el número de teléfono" value={estudianteData.telefono} onChange={handleChange} />
                            </div>

                            {/* Campo para el correo electrónico */}
                            <div className="form-group col-md-4">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Ingrese el correo electrónico" value={estudianteData.email} onChange={handleChange} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mt-4">Añadir Estudiante</button>
                    </form>
                </div>

                </div>
            </section>

        </div>
        
    );
};

export default EstudianteAdd;
