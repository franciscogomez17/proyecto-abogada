import Image from "next/image";
import styles from "./page.module.css";
import "@/styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPersonCane, 
  faFileSignature, 
  faShieldHalved, 
  faPeopleRoof, 
  faHandHoldingDollar 
} from '@fortawesome/free-solid-svg-icons';
import BotonInicio from "@/components/BotonInicio";
import BotonLeer from "@/components/BotonLeer";
import BotonAcerca from "@/components/BotonAcerca";

export default function Home() {
  return (
    <main className='holder'>
      <div className="homeimg">
        <img src="banner.jpg" alt="imagenprincipal" />
      </div>
      <div className="staffpaginainicio">
        <h2>Acerca de mí</h2>
        <div className="personainicio">
                <img src="fotostaff_150x150.jpeg" width="90" alt="imageniniciostaff" />
                <h4>Dra. Maria Celeste Gomez</h4>
            <h6>Abogada Especialista en Derecho Civil</h6>
            <p><strong>2025:</strong> Especialización en Derecho Procesal Civil.</p>
            <p><strong>2024:</strong> Posgrado en Defensa Técnica de Niños, Niñas y Adolescentes.</p>
            <p><strong>2024:</strong> Diplomado en Derecho del Consumidor</p>
            <div className="botonacercademi">
              <BotonAcerca />
            </div>
            </div>
      </div>
      <section className="serviciocaja">
        <h2>Nuestras Areas de Servicio</h2>
        <div className="serviciogridcaja">
        <div className="serviciogrid">
          {/* Previsional. */}
          <div className="servicioicono">
            <FontAwesomeIcon icon={faPersonCane} />
          </div>
          <h3>Derecho Previsional</h3>
        <p>Asesoramiento integral en jubilaciones y pensiones.</p>
        <div className="botonleer">
          <BotonLeer />
        </div>
        </div>
        {/*Contratos*/}
        <div className="serviciogrid">
          <div className="servicioicono">
          <FontAwesomeIcon icon={faFileSignature} />
          </div>
          <h3>Contrato</h3>
          <p>Redacción y revisión de convenios y acuerdos legales.</p>
          <div className="botonleer">
            <BotonLeer />
          </div>
        </div>
        {/*Defensa del consumidor*/}
        <div className="serviciogrid">
          <div className="servicioicono">
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>
          <h3>Consumo</h3>
          <p>Defensa Jurídica Especializada en Derecho del Consumidor</p>
          <div className="botonleer">
            <BotonLeer />
          </div>
        </div>
        {/*Familia*/}
        <div className="serviciogrid">
          <div className="servicioicono">
            <FontAwesomeIcon icon={faPeopleRoof} />
          </div>
          <h3>Familia</h3>
          <p>Gestión de niñez, adolescencia y responsabilidad parental.</p>
          <div className="botonleer">
            <BotonLeer />
          </div>
        </div>
        {/*Sucesiones*/}
        <div className="serviciogrid">
          <div className="servicioicono">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
          </div>
          <h3>Sucesiones</h3>
          <p>Tramitación eficiente de herencias y patrimonios.</p>
          <div className="botonleer">
            <BotonLeer />
          </div>
        </div>
        </div>
      </section>
      <section className="preguntasfrecuentes">
  <h2>Preguntas Frecuentes</h2>
  <div className="accordion" id="accordionExample">
    
    {/* Pregunta 1 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>¿Qué tipo de casos de consumo atiende el estudio?</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Atención especializada en Defensa del Consumidor.</strong> Gracias a la Diplomatura 2024 de la Dra. Gómez, gestionamos reclamos contra empresas de servicios, bancos y seguros con un enfoque actualizado y eficaz.
        </div>
      </div>
    </div>

    {/* Pregunta 2 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>¿Cómo es el proceso para iniciar una sucesión?</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Asesoramiento en Derecho Civil.</strong> Con la Especialización 2025 en Proceso Civil, garantizamos un trámite ágil para la declaratoria de herederos y la partición de bienes, priorizando la celeridad procesal.
        </div>
      </div>
    </div>

    {/* Pregunta 3 */}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>¿Realizan trámites jubilatorios ante ANSES?</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Derecho Previsional integral.</strong> Gestionamos jubilaciones, pensiones y reajustes de haberes, brindando un acompañamiento humano y técnico para asegurar sus derechos de seguridad social.
        </div>
      </div>
    </div>

  </div>
</section>

<div className="botoncontactoinicio">
  <h2>¿Necesita asesoramiento legal especializado?</h2>
</div>
<div className="boton">
  <BotonInicio />
</div>
    </main>
  );
}
