import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "./Css/dashboard.css";

const ServicioAdd = () => {
    const [servicioData, setServicioData] = useState({
        id: '',
        nombre: '',
        encargado: '',
        estado: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setServicioData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar campos vacíos
        if (!servicioData.id || !servicioData.nombre || !servicioData.encargado || !servicioData.estado) {
            Swal.fire('Por favor, complete todos los campos', '', 'error');
            return;
        }

        // Guardar en localStorage
        const serviciosGuardados = JSON.parse(localStorage.getItem('servicios')) || [];
        serviciosGuardados.push(servicioData);
        localStorage.setItem('servicios', JSON.stringify(serviciosGuardados));

        // Mostrar mensaje de éxito
        Swal.fire('Servicio añadido exitosamente', '', 'success');

        // Resetear el formulario
        setServicioData({
            id: '',
            nombre: '',
            encargado: '',
            estado: ''
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
                        <Link to="/login">
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
                    <div className="text">Añadir Servicio</div>

                <div className="user-form">
                    <form id="registroForm" onSubmit={handleSubmit}>
                        <div className="row">
                            {/* Campos del formulario */}
                            <div className="form-group col-md-4">
                                <label htmlFor="id">ID</label>
                                <input type="text" className="form-control" id="id" name="id" placeholder="Ingrese el ID" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre del servicio" onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="encargado">Encargado/a</label>
                                <input type="text" className="form-control" id="encargado" name="encargado" placeholder="Ingrese el nombre del encargado del servicio" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="form-group col-md-4">
                                <label htmlFor="estado">Estado</label>
                                <select className="form-select" id="estado" name="estado" onChange={handleChange}>
                                    <option value="">Selecciona una opción</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inhabilitado">Inhabilitado</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mt-4">Añadir Servicio</button>
                    </form>
                    
                </div>

            </div>
         </div>
         </section>
        </div>

    );
};

export default ServicioAdd;
