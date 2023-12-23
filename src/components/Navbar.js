import React from 'react';
import './navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar">
            <ul>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('skills')}>Skills</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('experience')}>Experience</li>
            </ul>
        </div>
    );
};

export default Navbar;
