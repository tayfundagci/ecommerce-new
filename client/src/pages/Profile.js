import React from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom"

function Profile() {
    let navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        logout();
        navigate('/');
    }

    return (
        <>
            <h3 className='text-center mb-4'>Profile</h3>

            <div className="card bg-transparent  m-auto text-center border border-white  align-items-center" style={{ width: "18rem", backgroundColor: "#282c34" }}>
                <div className="card-body">
                    {user && (
                        <>
                            <h5 className="card-title">{user._id}</h5>
                            <h6 className="card-subtitle">{user.email}</h6>
                            <p className="card-text">{user.role}</p>
                        </>
                    )}

                    {!user && (
                        <h5>No user</h5>
                    )}
                    <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Profile