import React from 'react'

export default function Shortcuts() {
    return (
        <div className="col-md-5 ">

            <h3 className="text-center">Accesos directos</h3>
            <div className="row">
                <div className="col-sm-5 mb-2 ml-2 mr-1 card bg-primary shortcut">
                    <div className="card-body text-center">
                        <a className="text-white" href="/index.html" target="_blank">Partes</a>
                    </div>
                </div>
                <div className="col-sm-5 mb-2 ml-2 mr-1 card bg-primary shortcut">
                    <div className="card-body text-center">
                        <a className="text-white" href="/index.html" target="_blank">Infracciones</a>
                    </div>
                </div>
                <div className="col-sm-5 mb-2 ml-2 mr-1 card bg-primary shortcut">
                    <div className="card-body text-center">
                        <a className="text-white" href="/index.html" target="_blank">Infractores</a>
                    </div>
                </div>
                <div className="col-sm-5 mb-2 ml-2 mr-1 card bg-primary shortcut">
                    <div className="card-body text-center">
                        <a className="text-white" href="/index.html" target="_blank">Usuarios</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
