import React, { Component } from 'react';
import '../styles/navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-container">

                {/* Brand */}
                <a className="brand-link" href="/">
                    <div className="brand">
                        <span className="brand-left">MRP</span> 
                        <span className="brand-split">|</span> 
                        <span className="brand-right">T</span>
                    </div>
                </a>

                {/* Navbar Links */}
                <div className="link-list">
                    <ul className="links">
                        <a className="link" href="#">
                            <li>ABOUT ME</li>
                        </a>
                        <a className="link" href="#">
                            <li>PROJECTS</li>
                        </a>
                        <a className="link" href="#">
                            <li>CONNECT WITH ME</li>
                        </a>
                        <a className="link" href="#">
                            <li>CONTACT</li>
                        </a>
                        <a className="link" href="#">
                            <li className="link">RESUME</li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }
}
