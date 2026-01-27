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
            <label>Comentario</label>
            <textarea name="comentario"></textarea>
        </p>
        
        <p className="centrar"><input type="submit" value="enviar" />

        </p>
        
        
        </form>

        
        
        
        
        </>




    )
}