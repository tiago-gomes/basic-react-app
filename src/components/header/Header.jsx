// Dependencies
import React from 'react';

// Styles
import './Header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <h1>Simple React Page</h1>
            </header>
        );
    }
}
