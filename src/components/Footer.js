import React from 'react'
import '../style/Footer.css'

export default function Footer() {
    const img = './pma-icon.svg'
    return (
        <footer className="container py-5 mt-5 ">
            <div className="row ">
                <div className="col-12 col-md ">
                    <img alt="Partes PMA" src={img} height="86px" width="120px" />
                    <small className="d-block mb-3 text-muted">&copy; Mario Ruiz - 2019</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Enlaces</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/index.html">Partes</a></li>
                        <li><a className="text-muted" href="/index.html">Infracciones</a></li>
                        <li><a className="text-muted" href="/index.html">Infractores</a></li>
                        <li><a className="text-muted" href="/index.html">Usuarios</a></li>
                        <li><a className="text-muted" href="/index.html">Solicitudes</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Acerca de</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="/index.html">Equipo</a></li>
                        <li><a className="text-muted" href="/index.html">Manual de Usuario</a></li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}
