import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Shortcuts from '../components/Shortcuts';
import Footer from '../components/Footer';
import ModelCreateInfraccion from './ModelCreateInfraccion';

export default class Infraccion extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Header />

                <ModelCreateInfraccion id="modalCreate" aria-hidden="true"/>

                <div class="content container">
                    <div class="row">
                        <div class="col-md-6">
                            lista de getInfracciones
                            <button type="button" class="btn btn-primary"
                                data-toggle="modal" data-target="#modalCreate">
                                Launch demo modal
                            </button>
                        </div>
                        <Shortcuts />
                    </div>
                </div>

                <Footer />
            </Fragment>
        )
    }
}
