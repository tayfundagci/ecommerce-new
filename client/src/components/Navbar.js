import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Navbar() {

    const { loggedIn } = useAuth();

    return (

        <nav id='navbar' className="navbar navbar-expand-lg" style={{ borderRadius: "0 0 10px 10px", backgroundColor: "#bbb" }}>
            <div className="container-fluid ">
                <div className='d-flex' id='navbarNav'>
                    <Link className="navbar-brand" to="/" style={{ color: "#333", fontWeight: "bold" }}>tDagci</Link>
                    <Link className="nav-link" to="/">Products</Link>
                </div>

                <div id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        {!loggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link className='nav-link' to="/signin"><button className='btn btn-primary btnnavs'>Login</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="/signup"><button className='btn btn-success btnnavs'>Register</button></Link>
                                </li>
                            </>
                        )}

                        {loggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link className='nav-link' to="/profile"><button className='btn btn-primary btnnavs'>Profile</button></Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar