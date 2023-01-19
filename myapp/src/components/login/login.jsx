import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';


export const Login = () => {
    const initialState={
        email:"",
        password:""
    }
    const [loginUser,setLoginUser]=useState(initialState);

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setLoginUser({
            ...loginUser,
            [name]:value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('login');
    }
    return (
        <div className='container'>

            <form className='form' onSubmit={handleSubmit}>
                <h2>Login with us 😊</h2>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" value={loginUser.email} onChange={handleChange} placeholder='Enter your email...' />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name="password" value={loginUser.password} onChange={handleChange} placeholder='Enter password here...' />
                </div>
                <div>
                    <button>LOGIN</button>
                </div>
                <p style={{marginTop:"1rem", fontSize:"1rem",color:"rgb(134, 52, 134)"}}>Don't have account?<Link to='/register'> Register with use</Link></p>
            </form>

        </div>
    )
}