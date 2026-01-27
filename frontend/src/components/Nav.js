"use client";
import Link from "next/link";

export default function Nav() {
    return(
         <div className="container-fluid">
      <nav className="navbar navbar-expand-lg mi-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Dr. Maria - Abogada
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/Sobremi">
                  Sobre mí
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/Servicios">
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )

}