import React from 'react';
import logo from '../images/Logo_clear.png';
const HomePage = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Yuledream</title>
            </head>
            <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/home"><img className="logo" src={logo} alt="Yuledream"/></a></li>
                        <li><a href="/pillowliterature">Pillow Literature</a></li>
                        <li><a href="/swingmusic">Swing Music</a></li>
                        <li><a href="/furballpictures">Furball Pictures</a></li>
                    </ul>
                </nav>
            </header>

            <section id="home-highlight"></section>
            <section id="home-book"></section>
            <section id="home-SwingMusic"></section>
            <section id="home-FurballPictures"></section>

            <p className="copyright">
                Copyright © 2024 Yuledream. All rights reserved.
            </p>
            </body>
        </div>
    );
};

export default HomePage;