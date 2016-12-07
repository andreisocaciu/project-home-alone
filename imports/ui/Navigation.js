/**
 * Created by Andrei on 12/7/2016.
 */
import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Moni</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">New Read</a></li>
                        <li><a href="badges.html">Timeline</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
