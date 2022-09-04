import React from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useAuth } from '../contexts/AuthContext'

function Profile() {
    const { user } = useAuth();
    return (
        <>
            <h3 className='text-center mb-4'>Profile</h3>

            <div className="card bg-transparent  m-auto text-center border border-white  align-items-center" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{user._id}</h5>
                    <h6 className="card-subtitle">{user.email}</h6>
                    <p className="card-text">{user.role}</p>
                </div>
            </div>
        </>
    )
}

export default Profile