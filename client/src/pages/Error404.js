import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className='text-center'>
            <div class="alert alert-warning " role="alert">This page was not found</div>
            <Link to="/"><button className="btn ">Go to homepage</button></Link>
        </div>

    )
}

export default Error404