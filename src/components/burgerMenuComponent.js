import '../components/mainPage.css'
import React, { useEffect, useRef } from 'react';
import '../components/burgerMenu.css'

export function BurgerMenu() {
    return (
        <div className='burgerMenu'>
            <input id="burger" type="checkbox" />
            <label for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav>
                <ul>
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Trade</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li><a href="#">Markets</a></li>
                    <li><a href="#">Campaigns</a></li>
                </ul>
                <a id='login' href='#'>Log In</a>
            </nav>
        </div>
    )
}