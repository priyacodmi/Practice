import React, { useState } from 'react';
import '../login/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registrationSchema } from './signUpSchema';


export const SignUp = () => {
    const navigate=useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialState: {
            name:"",
            email: "",
            password: ""
        },
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();

            const registerUser = {
                name:values.name,
                email: values.email,
                password: values.password,
                role: "user",
            };

            if (Object.keys(errors).length === 0) {
                axios.post(`posturl`, registerUser, {
                    headers: { "Content-Type": "application/json" },
                })
                    .then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                            toast.success(response.data.message);
                            navigate("/login");
                        }
                    })
                    .catch((error) => {
                        console.log(error.response.data.errors[0].msg, "error");
                        toast.error(error.response.data.errors[0].msg);
                    });
            }
        },
    });
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Register With Us 😊</h2>
                <div>
                    <label>User Name :</label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your username...' />
                    {errors.username && touched.username ? (
                        <p style={{ color: "red" }}>
                            {errors.username}
                        </p>
                    ) : null}
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email...' />
                    {errors.email && touched.email ? (
                        <p style={{ color: "red" }}>
                            {errors.email}
                        </p>
                    ) : null}
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Enter password here...' />
                    {errors.password && touched.password ? (
                        <p style={{ color: "red" }}>
                            {errors.password}
                        </p>
                    ) : null}
                </div>
                <div>
                    <button>SIGN-UP</button>
                </div>
                <p style={{marginTop:"1rem", fontSize:"1rem",color:"rgb(134, 52, 134)"}}>Already have account?<Link to='/login'> Login with us</Link></p>
            </form>

        </div>
    )
}