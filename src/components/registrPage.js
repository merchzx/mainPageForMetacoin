import './registrPage.css'
import React from 'react';

export function Registr() {
    return (
        <div className='forBack'>
            <div className='forBackImg'>
                <p className='cryptoo'>Crypto</p>
                <p className='sigmas'>Sigmas</p>
                <form className="parent">
                    <div className="div1">
                        <label>Referral ID
                            <input placeholder='Referral ID' className='large' type="text" />
                        </label>
                    </div>
                    <div className="div2">
                        <label>Username
                            <input placeholder='Username' type="text" />
                        </label>
                    </div>
                    <div className="div3">
                        <label>Display Name
                            <input placeholder='Display Name' type="text" />
                        </label>
                    </div>
                    <div className="div4">
                        <label>Email
                            <input placeholder='Email' className='large' type="email" />
                        </label>
                    </div>
                    <div className="div5">
                        <label>Password
                            <input placeholder='Password' type="password" />
                        </label>
                    </div>
                    <div className="div6">
                        <label>Confirm Password
                            <input placeholder='Confirm Password' type="password" />
                        </label>
                    </div>

                </form>
                <button className='signUp' type="submit">Sing Up</button>
            </div>
        </div>
    );
}