import React from 'react';
import logo from '../images/Logo_clear.png';
import FP_highlight from '../videos/future_world.mp4';
const FurballPicturesPage = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Furball Pictures</title>
                <link rel="stylesheet" href="/static/home/styles.css"/>
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

            <video autoPlay loop muted id="background-video" playsInline>
                <source src={FP_highlight} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <p className="copyright">
                Copyright © 2024 Yuledream. All rights reserved.
            </p>

            </body>

        </div>
    );
};

export default FurballPicturesPage;