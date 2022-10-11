import React, { useState } from 'react'
import { useFormik } from 'formik';

import validationSchema from '../loginValidations';
import { fetchLogin } from '../api';
import { useAuth } from '../contexts/AuthContext';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import moment from "moment"


function SignIn() {

    const map = `<iframe title="test" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6251.095167014697!2d27.201078999999996!3d38.428819000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962ec6e7464ed%3A0x404755c1f9398dba!2zS2_Fn3VrYXZhaywgMzUwODAgQm9ybm92YS_EsHptaXI!5e0!3m2!1str!2str!4v1664951311530!5m2!1str!2str"  width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

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




    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    console.log(dateRange);


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

            <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                    setDateRange(update);
                }}
                withPortal
            />        </div >
    )
}

export default SignIn