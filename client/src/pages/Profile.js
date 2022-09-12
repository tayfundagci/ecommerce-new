import React from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useAuth } from '../contexts/AuthContext'

function Profile() {
    const { user } = useAuth();

    return (
        <div className='row'>
            <div className="col-lg-6">
                <h3 className='text-right'>Profile <span>({user.role})</span></h3>
            </div>
            <div className="col-lg-6">
                <div className="text-left" >
                    <div>
                        {user && (
                            <>
                                <h3>{user.email}</h3>
                            </>
                        )}

                        {!user && (
                            <h5>No user</h5>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile