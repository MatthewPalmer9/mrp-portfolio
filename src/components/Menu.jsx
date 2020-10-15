import React, { Component } from 'react';
import menuScript from '../menu';

export default class Menu extends Component {

    componentDidMount(){
        menuScript()
    }

    render() {
        return (
            <div className="menu-container">
                    
            </div>
        )
    }
}
