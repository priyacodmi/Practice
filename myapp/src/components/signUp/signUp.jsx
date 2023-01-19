import React from 'react';
import '../login/login.css';
import { Link } from 'react-router-dom';


export const SignUp = () => {
    return (
        <div className='container'>
            <form className='form'>
                <h2>Register With Us 😊</h2>
                <div>
                    <label>User Name :</label>
                    <input type="text" placeholder='Enter your username...' />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" placeholder='Enter your email...' />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" placeholder='Enter password here...' />
                </div>
                <div>
                    <button>SIGN-UP</button>
                </div>
                <p style={{marginTop:"1rem", fontSize:"1rem",color:"rgb(134, 52, 134)"}}>Already have account?<Link to='/login'> Login with us</Link></p>
            </form>

        </div>
    )
}