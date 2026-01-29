import Image from "next/image";
import styles from "./page.module.css";
import "@/styles/home.css";

export default function Home() {
  return (
    <main className='holder'>
      <div className="homeimg">
        <img src="abogacia_960x250.png" alt="imagenprincipal" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Dra. Maria Celeste Gomez</h2>
          <p>Desde mi graduación en 2019, mi misión ha sido ofrecer soluciones legales precisas. En mi ejercicio independiente desde 2021, priorizo la actualización constante para defender sus derechos con rigor técnico.</p>
        </div>
        <div className="testimonios">
          <h4>Testimonios</h4>
          <div className="testimonio">
            <span className="autor">Jael Avendaño</span>
            <span className="cita">"Excelente servicio"</span>
          </div>
        </div>
      </div>
    </main>
  );
}
