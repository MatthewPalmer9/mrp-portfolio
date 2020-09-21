import React, { Component } from 'react';
import '../styles/navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-nav">

                    {/* List Items */}
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-address-card"></i>
                            <span className="link-text">About</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-project-diagram"></i>
                            <span className="link-text">Projects</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="link-text">Blog</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <span className="link-text">Resume</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
