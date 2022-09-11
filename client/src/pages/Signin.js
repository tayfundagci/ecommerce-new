import React from 'react'
import { useFormik } from 'formik';

import validationSchema from '../loginValidations';
import { fetchLogin } from '../api';
import { useAuth } from '../contexts/AuthContext';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from "react-router-dom";


function SignIn() {

    const { login } = useAuth();
    let navigate = useNavigate();


    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const loginResponse = await fetchLogin({ email: values.email, password: values.password });
                login(loginResponse);
                navigate("/");
                console.log(loginResponse);
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
            <h3 className='text-center'>Sign In</h3>
            <form onSubmit={formik.handleSubmit} className='mt-5' >
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" >Sign In</button>
                </div>
            </form >
        </div >
    )
}

export default SignIn