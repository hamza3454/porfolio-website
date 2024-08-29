import React from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Hi There! <span role="img" aria-label="wave">👋</span></h1>
                <h2>I'M <span className="highlight">HAMZA MEMON</span></h2>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Undergraduate Student', 'Tech Enthusiast'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="hero-image">
                <img src={process.env.PUBLIC_URL + '/images/IMG_7374.jpg'} alt="Hamza Memon" />
            </div>
        </section>
    );
}

export default Hero;
