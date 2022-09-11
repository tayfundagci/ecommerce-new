import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom"
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'

function Admin() {
    const { path, url } = useLocation();
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={url}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${url}/adminorders`}>Orders</Link>
                    </li>
                    <li>
                        <Link to={`${url}/adminproducts`}>Products</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <Routes>
                    <Route path={path} element={<Admin />} />
                    <Route path={`${path}/adminorders`} element={<AdminOrders />} />
                    <Route path={`${path}/adminproducts`} element={<AdminProducts />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin