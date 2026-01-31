"use client";
import { useState } from 'react';

export default function ContactForm() {
    
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        motivo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const response = await fetch('http://localhost:3017/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) 
        });

        if (response.ok) {
            alert("Consulta enviada con éxito");
          
            setFormData({ nombre: '', email: '', telefono: '', motivo: '' });
        } else {
            alert("Error al enviar la consulta");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </p>

                <p>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required />
                </p>

                <p>
                    <label>Telefono</label>
                    <input type="number" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </p>
                
                <p>
                    <label>Motivo de consulta</label>
                    <select name="motivo" value={formData.motivo} onChange={handleChange} className="input-estilizado" required>
                        <option value="">Seleccione una opción</option>
                        <option value="Previsional">Derecho Previsional</option>
                        <option value="Familia">Derecho de Familia</option>
                        <option value="Sucesiones">Derecho de Sucesiones</option>
                        <option value="Contratos">Derecho de Contratos</option>
                        <option value="Consumos">Derecho del Consumidor</option>
                        <option value="Otros">Otras consultas</option>
                    </select>
                </p>
                
                <p className="centrar">
                    <input type="submit" value="Solicitar turno" />
                </p>
            </form>
        </>
    );
}