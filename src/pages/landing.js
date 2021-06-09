import logo from './../images/logo.svg';
import React from 'react';
import helmet from 'react-helmet';
import ReactDOM from 'react-dom';


function Home() {
    return (
        <>
            <helmet>
                <title>Max Ferney</title>
            </helmet>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Max Ferney's <code>React</code> Website
                        </p>
                        <p>Currently Under Construction...</p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Learn React
                    </a>
                </header>
            </div>
        </>
    );
}
export default Home;
