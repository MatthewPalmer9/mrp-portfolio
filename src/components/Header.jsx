import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                {/* Main Header Content */}
                <h1><a href="/"><span>MRP</span> | <span>Technologies</span></a></h1>
                <h3>PEOPLE WORK BETTER TOGETHER</h3>
                <nav>
                    <a className="menu-btn" href="#">Menu</a>
                </nav>
            </div>
        )
    }
}
