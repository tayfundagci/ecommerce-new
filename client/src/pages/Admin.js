import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom"
import AdminNavbar from '../components/AdminNavbar'
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'

function Admin() {

    return (
        <div>
            <AdminNavbar />
            <div className="h5">Admin Home</div>
        </div>
    )
}

export default Admin