import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Css/dashboard.css";

const Estudiantes = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        // Recuperar los datos de estudiantes del localStorage
        const datosGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
        setEstudiantes(datosGuardados);
    }, []);
    return (
        <div className='dashboard'>
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
                    <div className="activity">
                        <div className="title">
                            {/* Icono de usuario (puede ser un componente de React o un SVG) */}
                            <span className="text">Modulo Estudiantes</span>
                            <a href="/estudiante-add" style={{ textDecoration: "none", marginLeft: "70%" }}>
                                +
                            </a>
                        </div>

                        <div className="activity-data">
                            <div className="data names">
                                <span className="data-title">Nombres</span>
                                {/* Lista de nombres */}
                            </div>
                            <div className="data email">
                                <span className="data-title">Email</span>
                                {/* Lista de emails */}
                            </div>
                            <div className="data joined">
                                <span className="data-title">Telefono</span>
                                {/* Lista de teléfonos */}
                            </div>
                            <div className="data status">
                                <span className="data-title">Facultad</span>
                                {/* Lista de facultades */}
                            </div>
                            <div className="data status">
                                <span className="data-title">Carrera</span>
                                {/* Lista de carreras */}
                            </div>
                            
                        </div>
                        <div className="activity-data">
                        {/* Iterar sobre los datos de estudiantes y mostrarlos */}
                        {estudiantes.map((estudiante, index) => (
                            <React.Fragment key={index}>
                                <div className="data names">
                                    <span className="data-list">{estudiante.nombreCompleto}</span>
                                </div>
                                <div className="data email">
                                    <span className="data-list">{estudiante.email}</span>
                                </div>
                                <div className="data joined">
                                    <span className="data-list">{estudiante.telefono}</span>
                                </div>
                                <div className="data status">
                                    <span className="data-list">{estudiante.facultad}</span>
                                </div>
                                <div className="data status">
                                    <span className="data-list">{estudiante.carrera}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Estudiantes;
