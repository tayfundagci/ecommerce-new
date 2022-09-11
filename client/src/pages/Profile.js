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

            <div className="m-auto text-center " >
                <div>
                    {user && (
                        <>
                            <h6 className="card-subtitle">{user.email}</h6>
                            <p className="card-text text-muted">{user.role}</p>
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