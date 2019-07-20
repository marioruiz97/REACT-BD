import React, { Component, Fragment } from 'react'
import './style/Main.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Shortcuts from './components/Shortcuts';

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />
                <div className="content container">
                    <div className="main">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="buscaPartes"><h4>Consultar Parte</h4></label>
                                <form className="form-inline mt-2 mt-md-0">
                                    <div className="form-group">
                                        <input name="buscaPartes" className="buscaPartes form-control mr-sm-2" type="text"
                                            placeholder="Ingresa Código del parte" aria-label="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </div>
                                </form>

                            </div>
                            <Shortcuts />
                        </div>
                    </div>
                </div>{/* fin div.content */}

                <Footer />

            </Fragment>
        )
    }
}
