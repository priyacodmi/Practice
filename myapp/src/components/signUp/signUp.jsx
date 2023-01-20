import React, { useState } from 'react';
import '../login/login.css';
import { Link, useNavigate } from 'react-router-dom';



export const SignUp = () => {
    const navigate=useNavigate();
    const initialState={
        username:"",
        email:"",
        password:""
    }
    const [registerUser,setRegisterUser]=useState(initialState);

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setRegisterUser({
            ...registerUser,
            [name]:value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('register');
        navigate('/login');
    }
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Register With Us 😊</h2>
                <div>
                    <label>User Name :</label>
                    <input type="text" name="username" value={registerUser.username} onChange={handleChange} placeholder='Enter your username...' />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" value={registerUser.email} onChange={handleChange} placeholder='Enter your email...' />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name="password" value={registerUser.password} onChange={handleChange} placeholder='Enter password here...' />
                </div>
                <div>
                    <button>SIGN-UP</button>
                </div>
                <p style={{marginTop:"1rem", fontSize:"1rem",color:"rgb(134, 52, 134)"}}>Already have account?<Link to='/login'> Login with us</Link></p>
            </form>

        </div>
    )
}