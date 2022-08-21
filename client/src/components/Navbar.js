import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav id='navbar' className="navbar navbar-expand-lg" style={{ borderRadius: "0 0 10px 10px", backgroundColor: "#bbb" }}>
            <div className="container-fluid ">
                <div className='d-flex' id='navbarNav'>
                    <Link className="navbar-brand" to="/" style={{ color: "#333", fontWeight: "bold" }}>tdagci</Link>
                    <Link className="nav-link" to="/">Products</Link>
                </div>

                <div id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className='nav-link' to="/signin"><button className='btn btn-primary btnnavs'>Login</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/signup"><button className='btn btn-success btnnavs'>Register</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar