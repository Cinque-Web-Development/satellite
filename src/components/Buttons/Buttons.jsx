import React from 'react';

import './Buttons.css';

export default function Buttons() {
    return (
        <div className="Buttons">
            <div className="buttons-section">
                <h2><code>button</code> elements</h2>
                <button className="stlt-btn"> Transparent</button>
                <button className="stlt-btn stlt-std-btn">Neutral</button>
                <button className="stlt-btn stlt-pos-btn">Positive</button>
                <button className="stlt-btn stlt-neg-btn">Negative</button>
                <button className="stlt-btn stlt-warn-btn">Warning</button>
                <button className="stlt-btn stlt-blue-btn">Blue</button>
            </div>
            <div className="buttons-section">
                <h2><code>a</code> elements styled as buttons</h2>
                <a href="/" className="stlt-btn">Transparent</a>
                <a href="/" className="stlt-btn stlt-std-btn">Neutral</a>
                <a href="/" className="stlt-btn stlt-pos-btn">Positive</a>
                <a href="/" className="stlt-btn stlt-neg-btn">Negative</a>
                <a href="/" className="stlt-btn stlt-warn-btn">Warning</a>
                <a href="/" className="stlt-btn stlt-blue-btn">Blue</a>
            </div>
        </div>
    )
}
