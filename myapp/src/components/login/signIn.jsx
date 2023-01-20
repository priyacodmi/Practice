import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginSchema } from './loginSchema';


export const Login = () => {
    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialState: {
                email: "",
                password: ""
            },
            validationSchema: loginSchema,
            onSubmit: (values, action) => {
                console.log(values);
                action.resetForm();

                const loginUser = {
                    email: values.email,
                    password: values.password
                };

                if (Object.keys(errors).length === 0) {
                    axios.post(`posturl`, loginUser, {
                        headers: { "Content-Type": "application/json" },
                    })
                        .then((response) => {
                            console.log(response);
                            if (response.status === 200) {
                                toast.success(response.data.message);
                                navigate("/");
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
                <h2>Login with us 😊</h2>
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
                    <button>LOGIN</button>
                </div>
                <p style={{ marginTop: "1rem", fontSize: "1rem", color: "rgb(134, 52, 134)" }}>Don't have account?<Link to='/register'> Register with use</Link></p>
            </form>

        </div>
    )
}