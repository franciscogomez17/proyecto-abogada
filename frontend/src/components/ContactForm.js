"use client";
export default function ContactForm() {
    return(
        <>
        <form action="/contacto" method="post" className="formulario" >
        
        <p>
            <label>Nombre</label>
            <input type="text" name="nombre" />
        </p>

        <p>
            <label>Email</label>
            <input type="text" name="email" />
        </p>

        <p>
            <label>Telefono</label>
            <input type="number" name="telefono" />
        </p>
        
        <p>
            <label>Motivo de consulta</label>
            <select name="motivo" className="input-estilizado" required>
                <option value="">Seleccione una opción</option>
                <option value="Previsional">Derecho Previsional</option>
                <option value="Familia">Derecho de Familia</option>
                <option value="Sucesiones">Derecho de Sucesiones</option>
                <option value="Contratos">Derecho de Contratos</option>
                <option value="Consumos">Derecho del Consumidor</option>
                <option value="Otros">Otras consultas</option>
            </select>
        </p>
        
        <p className="centrar"><input type="submit" value="Solicitar turno" />

        </p>
        
        
        </form>

        
        
        
        
        </>




    )
}