import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';


export const Login = () => {
    return (
        <div className='container'>

            <form className='form'>
                <h2>Login with us 😊</h2>
                <div>
                    <label>Email :</label>
                    <input type="email" placeholder='Enter your email...' />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" placeholder='Enter password here...' />
                </div>
                <div>
                    <button>LOGIN</button>
                </div>
                <p style={{marginTop:"1rem", fontSize:"1rem",color:"rgb(134, 52, 134)"}}>Don't have account?<Link to='/register'> Register with use</Link></p>
            </form>

        </div>
    )
}