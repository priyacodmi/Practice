import React from 'react';
import { Link } from 'react-router-dom';
import { SearchInput } from './input';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className='navContainer'>
            <ul>
                <li>
                    <span id='logoSection'>
                        <Link to="/" className='link'><h2><i>Movie-App</i></h2></Link>
                    </span>
                </li>
                <li>
                    <SearchInput/>
                </li>
                <li>
                    <Link to="/login" className='link'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}