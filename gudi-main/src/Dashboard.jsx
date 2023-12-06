import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Css/dashboard.css';

const Dashboard = () => {
    const [usuariosRecientes, setUsuariosRecientes] = useState([]);
    const [estadisticas, setEstadisticas] = useState({
        estudiantes: 0,
        usuarios: 0,
        servicios: 0
    });

    useEffect(() => {
        // Cargar datos de usuarios recientes desde localStorage
        const datosUsuariosRecientes = JSON.parse(localStorage.getItem('usuariosRecientes')) || [];
        setUsuariosRecientes(datosUsuariosRecientes);

        // Cargar datos de estudiantes, servicios y usuarios para estadísticas
        const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
        const servicios = JSON.parse(localStorage.getItem('servicios')) || [];
        const usuarios = JSON.parse(localStorage.getItem('misDatos'))?.usuarios || [];

        setEstadisticas({
            estudiantes: estudiantes.length,
            usuarios: usuarios.length,
            servicios: servicios.length
        });
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
                        <Link to="/">
                            <span className="link-name">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
       
                <div className="top">
                    <div className="search-box">
                        {/* Icono de búsqueda (puede ser un componente de React o un SVG) */}
                        <input type="text" placeholder="Search here..."/>
                    </div>
                </div>
                
                <section className="dashboard">
                     <div className="dash-content">
                    {/* Overview con estadísticas */}
                    <div className="overview">
                        <div className="title">
                            <span className="text">Dashboard</span>
                        </div>
                        <div className="boxes">
                            <div className="box box1">
                                <span className="text">Estudiantes</span>
                                <span className="number">{estadisticas.estudiantes}</span>
                            </div>
                            <div className="box box2">
                                <span className="text">Usuarios</span>
                                <span className="number">{estadisticas.usuarios}</span>
                            </div>
                            <div className="box box3">
                                <span className="text">Servicios</span>
                                <span className="number">{estadisticas.servicios}</span>
                            </div>
                        </div>
                    </div>

                    <div className="activity">
                        <div className="title">
                            <span className="text">Usuarios Recientes</span>
                        </div>
                        <div className="activity-data">
                            {/* Iterar sobre los datos de usuarios recientes */}
                            {usuariosRecientes.map((usuario, index) => (
                                <React.Fragment key={index}>
                                    {/* Aquí va la estructura de cada usuario reciente */}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
