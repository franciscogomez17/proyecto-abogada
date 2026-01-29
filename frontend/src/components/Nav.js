"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {

const pathname = usePathname();
const isActive = (path) => path === pathname;


    return(
         <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg mi-navbar">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Sobremi" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Sobre mí
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Servicios" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Novedades" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                Novedades
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Contacto" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                  Solicita tu turno
                </Link>
              </li>
            </ul>
          </div>
        </div>
           <Link href="/" className="navbar-brand">
           {' '}MCG
      <img src="/logo.png" alt="imagendelogo" width="40" />
    </Link>
      </nav>
    </div>
    )

}