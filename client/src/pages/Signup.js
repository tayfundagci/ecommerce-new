import React from 'react'
import { useFormik } from 'formik';

import validationSchema from '../validations';
import { fetchRegister } from '../api';
import { useAuth } from '../contexts/AuthContext';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from "react-router-dom";


function Signup() {

    const { login } = useAuth();
    let navigate = useNavigate();


    const formik = useFormik({
        initialValues: { email: "", password: "", passwordConfirm: "" },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const registerResponse = await fetchRegister({ email: values.email, password: values.password });
                login(registerResponse);
                navigate("/");
                console.log(registerResponse);
                toast.success('You have been registered', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                });
            } catch (e) {
                bag.setErrors({ general: e.response.data.message })
                toast.error(`${e.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                });
            }

        }
    })


    return (
        <div className='mt-5'>
            {formik.errors.general && (
                <ToastContainer theme='light' style={{ marginTop: "60px" }} />
            )}
            <ToastContainer theme='light' style={{ marginTop: "60px" }} />
            <h3 className='text-center'>Sign Up</h3>
            <form onSubmit={formik.handleSubmit} className='mt-5' >
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
                    <button type="submit" className="btn btn-primary" >Sign Up</button>
                </div>
            </form >
        </div >
    )
}

export default Signup