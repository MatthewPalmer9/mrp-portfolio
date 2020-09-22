import React, { Component } from 'react';
import '../styles/temp-header.css';

export default class Header extends Component {
    render() {
        return (
            <>
                <section className="main">
                    <div className="main-header-container">
                        <div className="main-header-content">
                            <h1 className="brand-title"><span className="mrp">MRP</span> <span className="splitter">|</span> <span className="header-technologies">TECHNOLOGIES</span></h1>
                            <p className="brand-phrase">
                                PEOPLE WORK BETTER TOGETHER
                            </p>
                            <p className="quote-phrase">
                                <em>"The power of one, if fearless and focused, is formidable, but the power of many working together is better."</em>
                            </p>
                            <p className="quote-owner">
                                -Gloria Macapagal Arroyo
                            </p>
                        </div>

                        <div className="main-header-side-content">
                            <h3>Want to work with me? I'm always looking for the opportunity to grow as a developer. Don't be shy! Get in touch!</h3>
                            <div className="btn-container">
                                <button className="contact-me-btn">Get in Touch</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
