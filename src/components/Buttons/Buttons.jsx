import React from 'react';

import './Buttons.css';

export default function Buttons() {
    return (
        <div className="Buttons">
            <div className="button-columns-wrapper">
                <div className="buttons-section">
                    <h3><code>button</code> elements</h3>
                    <button className="stlt-btn">Transparent</button>
                    <button className="stlt-btn stlt-std-btn">Neutral</button>
                    <button className="stlt-btn stlt-pos-btn">Positive</button>
                    <button className="stlt-btn stlt-neg-btn">Negative</button>
                    <button className="stlt-btn stlt-warn-btn">Warning</button>
                    <button className="stlt-btn stlt-blue-btn">Blue</button>
                </div>
                <div className="buttons-section">
                    <h3><code>a</code> elements styled as buttons</h3>
                    <a href="/" className="stlt-btn">Transparent</a>
                    <a href="/" className="stlt-btn stlt-std-btn">Neutral</a>
                    <a href="/" className="stlt-btn stlt-pos-btn">Positive</a>
                    <a href="/" className="stlt-btn stlt-neg-btn">Negative</a>
                    <a href="/" className="stlt-btn stlt-warn-btn">Warning</a>
                    <a href="/" className="stlt-btn stlt-blue-btn">Blue</a>
                </div>
            </div>
            <div>
                <h3>Resized buttons</h3>
                    <button className="stlt-btn stlt-xsm-btn">Extra Small</button>
                    <button className="stlt-btn stlt-sm-btn">Small</button>
                    <button className="stlt-btn">Standard</button>
                    <button className="stlt-btn stlt-lg-btn">Large</button>
                    <button className="stlt-btn stlt-xlg-btn"> Extra Large</button>
            </div>
        </div>
    )
}
