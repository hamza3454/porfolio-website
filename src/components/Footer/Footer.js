// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer-container">
                <a href="https://www.linkedin.com/in/hamza3454/" target="_blank" rel="noopener noreferrer" className="Footer-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/hamza.memonn/" target="_blank" rel="noopener noreferrer" className="Footer-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                </a>
                <a href="mailto:hamzam3454@gmail.com" className="Footer-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" />
                </a>
                <a href="https://github.com/hamza3454" className="Footer-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
