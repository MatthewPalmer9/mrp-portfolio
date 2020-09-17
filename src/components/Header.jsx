import React, { Component } from 'react';
import '../styles/header.css';

export default class Header extends Component {
    render() {
        return (
            <>
                <section>
                    <div className="main-header">
                        <div className="main-header-content">
                            <div className="main-header-container">
                                <h1>Hello world</h1>
                            </div>

                            <div className="main-header-side-content">
                                <h1>Hello from the right</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
