import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
    return (
        <div>
            <nav id='admin-nav'>
                <ul className='d-flex justify-content-center mr-4'>
                    <li className=''>
                        <Link to="/admin">Home</Link>
                    </li>
                    <li className='ml-4'>
                        <Link to="/admin/adminorders">Orders</Link>
                    </li>
                    <li className='ml-4'>
                        <Link to="/admin/adminproducts">Products</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavbar