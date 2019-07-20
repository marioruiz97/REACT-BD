import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Sistema de partes PMA <br /> CACOM 4</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing
                    efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="/index.html">Coming soon</a>
                </div>
                <div className="product-device shadow-md d-none d-lg-block"></div>
                <div className="product-device product-device-2 shadow-md d-none d-lg-block"></div>
            </div>
        </header>
    )
}
