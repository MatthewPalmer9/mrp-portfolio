import React, { Component } from 'react';
import '../styles/navbar.css';
import resume from '../mattpdev-resume.pdf';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-nav">
                    {/* Logo */}

                    <li className="logo">
                        <a href="/" className="nav-link">
                            <span className="link-text">
                                <span className="link-text mrp">MRP</span>
                            </span>
                            <i className="fas fa-angle-double-right"></i>
                        </a>
                    </li>

                    {/* List Items */}

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="fas fa-home"></i>
                            <span className="link-text">Home</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="fas fa-project-diagram"></i>
                            <span className="link-text">Projects</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/matthewpalmer9" className="nav-link">
                            <i className="fab fa-linkedin"></i>
                            <span className="link-text">LinkedIn</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="https://www.twitter.com/MattPDev" className="nav-link">
                            <i className="fab fa-twitter"></i>
                            <span className="link-text">Twitter</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="https://www.github.com/matthewpalmer9" className="nav-link">
                            <i className="fab fa-github"></i>
                            <span className="link-text">Github</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href={resume} className="nav-link" download>
                            <i className="fas fa-download"></i>
                            <span className="link-text">Resume</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
