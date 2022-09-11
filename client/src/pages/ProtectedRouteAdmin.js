import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRouteAdmin({ admin }) {
    const { user } = useAuth();

    return (
        admin && user.role !== 'admin' ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRouteAdmin