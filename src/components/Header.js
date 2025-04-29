import { Link } from 'react-router-dom';
import '../components/Header.css'
import React, { useEffect, useRef, useState } from 'react';

export function Header(props) {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    if (props.amount === "6") {
        return (
            <header>
                <h1 className='logo'>Crypto Sigmas</h1>
                <nav>
                    <a href='#'>Finance</a><img src='arrow.png'></img>
                    <a href='#'>Products</a><img src='arrow.png'></img>
                    <a href='#'>Trade</a><img src='arrow.png'></img>
                    <a href='#'>Wallet</a><img src='arrow.png'></img>
                    <a href='#'>Markets</a>
                    <a href='#'>Campaigns</a><img src='arrow.png'></img>
                </nav>
                <div className='loginAndElse'>
                    <img src='internet.png' href="#"></img>
                    <img src='settings.png' href="#"></img>
                    <div className="switchTheme">
                        <Link to={'/LighThemeLargeGraph'}>
                            <img className='nightModeImg' src="nightMode.png" alt="switch" />
                            <img src="round.png" alt="round" />
                        </Link>
                    </div>
                    <a id='login' href='#'>Log In</a>
                </div>
            </header>
        )
    }
    else {
        return (
            <header>
                <h1 className='logo'>Crypto Sigmas</h1>
                <nav>
                    <a href='#'>Products</a><img src='arrow.png'></img>
                    <a href='#'>Trade</a><img src='arrow.png'></img>
                </nav>
                <div className='loginAndElse'>
                    <img src='internet.png' href="#"></img>
                    <img src='settings.png' href="#"></img>
                    <div className="switchTheme" onClick={toggleTheme}>
                        <img src="nightMode.png" alt="switch" />
                        <img src="round.png" alt="round" />
                    </div>
                    <a id='login' href='#'>Log In</a>
                </div>
            </header>
        )
    }
}
