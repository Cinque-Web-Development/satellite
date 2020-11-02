import React from 'react';
import './NavBars.css';

export default function NavBarLogin() {
    return (
        <nav className="stlt-nav-bar-login">
            {/* add your site name or logo here */}
            <h1 className="stlt-site-name">Satellite by CWD</h1>
            <ul>
                <li><a href="/" className="stlt-nav-link">Login</a></li>
                <li><a href="/" className="stlt-nav-link">Signup</a></li>
                <li><a href="/" className="stlt-nav-link">Logout</a></li>
            </ul>
        </nav>
    )
}
