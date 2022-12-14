import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ element: Component, ...rest }) {
    const { loggedIn, user } = useAuth();

    return (
        loggedIn ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoute