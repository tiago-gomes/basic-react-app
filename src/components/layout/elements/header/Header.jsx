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
                <h1>Fileserver 1.0.0</h1>
            </header>
        );
    }
}
