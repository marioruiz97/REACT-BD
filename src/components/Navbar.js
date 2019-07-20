import React from 'react'

export default function Navbar() {
    const img = './pma-icon.png'

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/index.html">
                <img alt="Partes PMA" src={img} height="45px" width="78px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/index.html">Partes</a>
                    </li>
                    <li className="nav-item">
                        <a href="/index.html" className="nav-link">Infractores</a>
                    </li>
                    <li className="nav-item">
                        <a href="/index.html" className="nav-link">Infracciones</a>
                    </li>
                    <li className="nav-item">
                        <a href="/index.html" className="nav-link">Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a href="/index.html" className="nav-link">Solicitudes</a>
                    </li>

                </ul>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
