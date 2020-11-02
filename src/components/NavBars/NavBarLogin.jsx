import React from 'react';
import {Link} from 'react-router-dom';
import './NavBars.css';

export default function NavBarLogin() {
    return (
        <nav className="stlt-nav-bar-login">
            {/* add your site name or logo here */}
            <h1 className="stlt-site-name">Satellite</h1>
            <ul>
                <li><Link to="/" className="stlt-nav-link">Login</Link></li>
                <li><Link to="/" className="stlt-nav-link">Signup</Link></li>
                <li><Link to="/" className="stlt-nav-link">Logout</Link></li>
            </ul>
        </nav>
    )
}
