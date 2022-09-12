import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRouteAdmin({ admin }) {
    const { user } = useAuth();

    if (admin && user === null) {
        return <Navigate to="/" />
    } else if (admin && user.role === 'user') {
        return <Navigate to="/" />
    } else if (admin && user.role === 'admin') {
        return <Outlet />
    }
}

export default ProtectedRouteAdmin