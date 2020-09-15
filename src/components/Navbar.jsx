import React, { Component } from 'react';
import '../styles/navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-container">

                {/* Brand */}
                <div className="brand">
                    <span className="brand-left">MRP</span> 
                    <span className="brand-split">|</span> 
                    <span className="brand-right">T</span>
                </div>

                {/* Navbar Links */}
                <div className="link-list">
                    <ul className="links">
                        <li>
                            <a className="link" href="#">Projects</a>
                        </li>
                        <li>
                            <a className="link" href="#">Blog</a>
                        </li>
                        <li>
                            <a className="link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
