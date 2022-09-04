import React from 'react'
import { useFormik } from "formik"
import validationSchema from '../helpers/validations';

function Signup() {

    const formik = useFormik({
        initialValues: { email: "", password: "", passwordConfirm: "" },
        onSubmit: async (values, bag) => { console.log(values); },
        validationSchema
    })

    return (
        <div className=' mt-5'>
            <h3 className='text-center'>Sign Up</h3>
            <form onSubmit={formik.handleSubmit} className='mt-5'>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                </div>
                <div className="form-group">
                    <label >Password Confirm</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" name='passwordConfirm' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordConfirm} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup