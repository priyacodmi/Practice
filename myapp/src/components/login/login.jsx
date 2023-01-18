import React from 'react';


export const Login=()=>{
    return(
        <div>
            <div>
                <label>User Name :</label>
                <input type="text" placeholder='Enter your username...'/>
            </div>
            <div>
                <label>Password :</label>
                <input type="password" placeholder='Enter password here...'/>
            </div>
            <div>
                <button>Login</button>
            </div>
            <p>Don't have account? Register with use</p>
        </div>
    )
}