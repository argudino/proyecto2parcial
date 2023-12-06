import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Css/dashboard.css";

const Servicios = () => {
    const [serviciosData, setServiciosData] = useState([]);

    useEffect(() => {
        // Cargar datos desde localStorage usando la clave correcta 'servicios'
        const loadedData = JSON.parse(localStorage.getItem('servicios')) || [];
        setServiciosData(loadedData);
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
                        <input type="text" placeholder="Search here..."/>
                    </div>
                    <img src="../images/profile.png" alt=""/>
                </div>

                <div className="dash-content">
                    <div className="activity">
                        <div className="title">

                            <span className="text">Modulo Servicios</span>
                            
                            <a href="servicio-add.html" style={{textDecoration: "none", marginLeft: "70%"}}>
                            <Link to="/servicios-add">
                                +
                            </Link>
                            </a>
                        </div>
                        
                       
                        <div className="activity-data">
                            {/* Encabezados */}
                            <div className="data names">
                                <span className="data-title">ID</span>
                                {serviciosData.map((item, index) => <span className="data-list" key={index}>{item.id}</span>)}
                            </div>
                            <div className="data email">
                                <span className="data-title">Nombre</span>
                                {serviciosData.map((item, index) => <span className="data-list" key={index}>{item.nombre}</span>)}
                            </div>
                            <div className="data joined">
                                <span className="data-title">Encargado/a</span>
                                {serviciosData.map((item, index) => <span className="data-list" key={index}>{item.encargado}</span>)}
                            </div>
                            <div className="data status">
                                <span className="data-title">Estado</span>
                                {serviciosData.map((item, index) => <span className="data-list" key={index}>{item.estado}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Servicios;
