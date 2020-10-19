import React, { Component } from 'react';
import menuScript from '../menu';

export default class Menu extends Component {

    componentDidMount(){
        menuScript()
    }

    render() {
        return (
            <div className="menu-container">
                <h1 className="menu-title">
                    <a href="/">
                        <span>MRP</span> | <span>Technologies</span>
                    </a>
                </h1>
                <ul className="nav-container">
                    <li><a target="_blank" href="/"><i class="fas fa-home"></i> HOME</a></li>
                    <li><a target="_blank" href="/"><i class="fas fa-user-alt"></i> ABOUT</a></li>
                    <li><a target="_blank" href="/"><i class="fas fa-project-diagram"></i> PROJECTS</a></li>
                    <li><a target="_blank" href="/"><i class="fas fa-blog"></i> BLOG</a></li>
                </ul>
            </div>
        )
    }
}
