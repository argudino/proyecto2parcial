import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/home.css';

const Home = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        // Obtener servicios del localStorage y establecerlos en el estado
        const serviciosAlmacenados = JSON.parse(localStorage.getItem('servicios')) || [];
        setServicios(serviciosAlmacenados);
    }, []);

    return (
        <main >
            {/* Sección del héroe */}
            <section class="hero">
   
                    <h1 className="hero-title">Bienvenido a DBU</h1>
                    <Link to="/login" className="btn-tratamientos">Ingreso</Link>
            </section>

            {/* Sección de servicios */}
            <section id="servicios" class="services-section">
            <h2 className="services-title">Nuestros Servicios</h2>

                <div className="container">
                    <div className="services-grid">
                        {servicios.map((servicio, index) => (
                            <div className="service-card" key={index}>
                                <img src={servicio.imagen} alt={servicio.nombre} className="service-img" />
                                <h3 className="service-name">{servicio.nombre}</h3>
                                <p className="service-description">{servicio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
