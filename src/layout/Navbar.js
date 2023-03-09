import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">
                        User Management Application
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="dropdown dropstart">
                        <button className="btn btn-primary border border-secondary-subtle dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Aksiyonlar
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/">Giriş Yap</Link></li>
                            <li className="dropdown-divider"></li>
                            <li><Link className="dropdown-item" to="/adduser">Kullanıcı Ekle</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
