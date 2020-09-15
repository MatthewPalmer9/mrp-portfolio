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
                        <li>
                            <a className="link" href="#">ABOUT ME</a>
                        </li>
                        <li>
                            <a className="link" href="#">PROJECTS</a>
                        </li>
                        <li>
                            <a className="link" href="#">CONNECT WITH ME</a>
                        </li>
                        <li>
                            <a className="link" href="#">CONTACT</a>
                        </li>
                        <li>
                            <a className="link" href="#">RESUME</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
