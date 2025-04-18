import '../components/secondPage.css'
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "width": "942",
          "height": "630",
          "symbol": "ETHUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "#0F0527",
          "allow_symbol_change": true,
          "hide_top_toolbar": true,
          "allow_symbol_change": true, 
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
        </div>
    );
}

export default memo(TradingViewWidget);


function CryptoCurrence(props) {
    return (
        <div className='crypto'>
            <img src={props.name + '.png'}></img>
            <p className='ticker'>{props.tick}</p>
            <p className='amount'>{props.am}</p>
        </div>
    )
}

export function PageWithGraph(props) {
    return (
        <div id='forBackk'>
            <div id='forBackgroundd'>
                <header>
                    <h1 className='logo'>Crypto Sigmas</h1>
                    <nav>
                        <a href='#'>Products</a><img src='arrow.png'></img>
                        <a href='#'>Trade</a><img src='arrow.png'></img>
                    </nav>
                    <div className='loginAndElse'>
                        <img src='./photos/internet.png' href="#"></img>
                        <img src='./photos/settings.png' href="#"></img>
                        <div className='switchTheme'>
                            <img src='nightMode.png'></img>
                            <img src='Elipse 51.png'></img>
                        </div>
                        <a id='login' href='#'>Log In</a>
                    </div>
                </header>
                <div class="parent">
                    <div class="exchange">
                        <div className='currentBalance'>
                            <p>Balance</p>
                            <p>0,00 ETH</p>
                            <p>0 USDT</p>
                        </div>
                        <div className='Amount'>
                            <p className='am'>Amount</p>
                            <p className='tick'>ETH</p>
                            <p className='usend'>YOU SEND</p>
                            <p className='currPrice'>$ 1,555.55</p>
                            <input id='slide' type='range'></input>
                        </div>
                        <img src='exchange.png'></img>
                        <div className='Amount'>
                            <p className='am'>Amount</p>
                            <p className='tick'>USDT</p>
                            <p className='usend2'>YOU SEND</p>
                            <p className='currPrice'>$ 1</p>
                        </div>
                    </div>
                    <div class="balance"> </div>
                    <div class="mainGraph"><TradingViewWidget></TradingViewWidget></div>
                    <div class="pooledTok">
                        <div className='whatWeExchange'>
                            <p>Pooled Tokens</p>
                            <div>
                                <img src='eth.png'></img><p>ETH</p>
                            </div>
                            <div>
                                <img src='usdt.png'></img><p>ETH</p>
                            </div>
                        </div>
                        <div className='liquidity'>
                            <div>
                                <p>Total Liquidity</p>
                                <p>$92.8 M</p>
                                <p>0.59%</p>
                            </div>
                            <div>
                                <p>24h Volume</p>
                                <p>$7.4 M</p>
                                <p>-36.56%</p>
                            </div>
                        </div>
                    </div>
                    <div class="search">
                        <div className='searchBar'>
                            <img src='searchIcon.png'></img>
                            <input type='text' placeholder='Seacrh coin or paste any token'></input>
                        </div>
                        <CryptoCurrence name='eth' tick='ETH' am='0'></CryptoCurrence>
                        <CryptoCurrence name='usdt' tick='USDT' am='0'></CryptoCurrence>
                        <CryptoCurrence name='sol' tick='SOL' am='0'></CryptoCurrence>
                        <CryptoCurrence name='xrp' tick='XRP' am='0'></CryptoCurrence>
                    </div>
                    <div class="pair">
                        <p>Pair</p>
                        <p>Volume</p>
                        <p>Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}