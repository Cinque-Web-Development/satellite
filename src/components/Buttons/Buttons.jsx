import React from 'react';

import './Buttons.css';

export default function Buttons() {
    return (
        <div className="Buttons">
            <div>
            </div>
            <button className="stlt-btn stlt-std-btn">Standard Button</button>
            <a href="/" className="stlt-btn stlt-std-btn">Standard Button</a>
            <button className="stlt-btn stlt-neg-btn">Negative Button</button>
            <a href="/" className="stlt-btn stlt-neg-btn">Negative Button</a>
        </div>
    )
}
