import React from 'react'
import './Forms.css'

export default function Forms() {
    return (
        <div className="forms">

    {/* Orginal Forms */}
            <div className="orginal">
                <h3>Original</h3>
                {/* name, email, message */}
                <form className="stlt-form">
                    <fieldset className="stlt-fieldset-sm">
                        <label for="name" className="stlt-label-sm">Name</label>
                        <input type="text" id="name" name="sender_name" className="stlt-input-sm" placeholder=""/>
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <label for="email" className="stlt-label-sm">Email</label>
                        <input type="email" id="email" name="sender_email" className="stlt-input-sm" placeholder="" />
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <label for="message" className="stlt-label-sm">Message</label>
                        <textarea id="message" name="message" cols="50" rows="3" className="stlt-input-sm" placeholder="" />
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <input type="submit" value="Submit" className="stlt-btn stlt-btn-neutral stlt-btn-small" />
                    </fieldset>
                </form>

                {/* Username/email && password */}
                <form action="" className="stlt-form">
                    <fieldset className="stlt-fieldset-sm">
                        <label for="name" className="stlt-label-sm">Email</label>
                        <input type="text" id="name" className="stlt-input-sm" placeholder=""/>
                    </fieldset>

                    <fieldset className="stlt-fieldset-sm">
                        <label for="password" className="stlt-label-sm">Password</label>
                        <input type="password" id="password" className="stlt-input-sm" placeholder=""/>
                    </fieldset>

                    <fieldset className="stlt-fieldset-sm">
                        <input type="submit" value="Submit" className="stlt-btn stlt-btn-neutral stlt-btn-small" />
                    </fieldset>
                </form>

            </div>

    {/* Clear Forms */}
            <div className="clear">
            <h3>Clear</h3>
                {/* name, email, message Clear*/}
                <form className="stlt-form">
                    <fieldset className="stlt-fieldset-sm">
                        <label for="name" className="stlt-label-sm">Name</label>
                        <input type="text" id="name" name="sender_name" className="stlt-input-sm clear" placeholder=""/>
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <label for="email" className="stlt-label-sm">Email</label>
                        <input type="email" id="email" name="sender_email" className="stlt-input-sm clear" placeholder="" />
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <label for="message" className="stlt-label-sm">Message</label>
                        <textarea id="message" name="message" cols="50" rows="3" className="stlt-input-sm clear" placeholder="" />
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <input type="submit" value="Submit" className="stlt-btn stlt-btn-small" />
                    </fieldset>
                </form>

                {/* Username/email && password Clear*/}
                <form action="" className="stlt-form">
                    <fieldset className="stlt-fieldset-sm">
                        <label for="name" className="stlt-label-sm">Email</label>
                        <input type="text" id="name" className="stlt-input-sm clear" placeholder=""/>
                    </fieldset>

                    <fieldset className="stlt-fieldset-sm">
                        <label for="password" className="stlt-label-sm">Password</label>
                        <input type="password" id="password" className="stlt-input-sm clear" placeholder=""/>
                    </fieldset>

                    <fieldset className="stlt-fieldset-sm">
                        <input type="submit" value="Submit" className="stlt-btn stlt-btn-neutral stlt-btn-small" />
                    </fieldset>
                </form>

            </div>

    {/* Shaded Forms */}
            <div className="shaded">
            <h3 className="shaded">Shaded</h3>
                {/* name, email, message Shaded*/}
                <form className="stlt-form shaded">
                    <fieldset className="stlt-fieldset-sm">
                        <label for="name" className="stlt-label-sm shaded">Name</label>
                        <input type="text" id="name" name="sender_name" className="stlt-input-sm shaded" placeholder=""/>
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <label for="email" className="stlt-label-sm shaded">Email</label>
                        <input type="email" id="email" name="sender_email" className="stlt-input-sm shaded" placeholder="" />
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <label for="message" className="stlt-label-sm shaded">Message</label>
                        <textarea id="message" name="message" cols="50" rows="3" className="stlt-input-sm shaded" placeholder="Messageblac" />
                    </fieldset>
                    
                    <fieldset className="stlt-fieldset-sm">
                        <input type="submit" value="Submit" className="stlt-btn stlt-btn-neutral stlt-btn-small" />
                    </fieldset>
                </form>

                {/* Username/email && password */}
                <form action="" className="stlt-form shaded">
                    <fieldset className="stlt-fieldset-sm">
                        <label for="name" className="stlt-label-sm shaded">Email</label>
                        <input type="text" id="name" className="stlt-input-sm shaded" placeholder=""/>
                    </fieldset>

                    <fieldset className="stlt-fieldset-sm">
                        <label for="password" className="stlt-label-sm shaded">Password</label>
                        <input type="password" id="password" className="stlt-input-sm shaded" placeholder=""/>
                    </fieldset>

                    <fieldset className="stlt-fieldset-sm">
                        <input type="submit" value="Submit" className="stlt-btn stlt-btn-neutral stlt-btn-small" />
                    </fieldset>
                </form>

            </div>

    
            
        </div>
    )
}