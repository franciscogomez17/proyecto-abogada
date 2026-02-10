"use client";
import { useState } from "react";

export default function ConsultaPage() {
    const initialForm = {
        nombre: "",
        email: "",
        telefono: "",
        motivo: ""
    };

    const [formData, setFormData] = useState(initialForm);
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setMsg("");

        try {
            const response = await fetch("http://localhost:3017/api/consultas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!data.error) {
                setMsg("¡Consulta enviada con éxito!");
                setFormData(initialForm);
            } else {
                setMsg("Hubo un error al enviar la consulta.");
            }
        } catch (error) {
            setMsg("Error de conexión con el servidor.");
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="holder">
            <div className="columna-contacto">
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                    </p>
                    <p>
                        <label>Motivo de consulta</label>
                        <select name="motivo" value={formData.motivo} onChange={handleChange} required>
                            <option value="">Seleccione una opción</option>
                            <option value="Previsional">Derecho Previsional</option>
                            <option value="Familia">Derecho de Familia</option>
                            <option value="Sucesiones">Derecho de Sucesiones</option>
                            <option value="Contratos">Derecho de Contratos</option>
                            <option value="Consumos">Derecho del Consumidor</option>
                            <option value="Otros">Otras consultas</option>
                        </select>
                    </p>
                    <p className="acciones">
                        <input type="submit" value={sending ? "Enviando..." : "Enviar Consulta"} disabled={sending} />
                    </p>
                    {msg && <p className="alerta">{msg}</p>}
                </form>
            </div>
        </main>
    );
}