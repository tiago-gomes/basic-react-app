// Dependencies
import React from 'react';

// Components
import Header from '../header/Header.jsx';  
import Content from '../content/Content.jsx';  
import Footer from '../footer/Footer.jsx';

// Styles
import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="site-wrapper">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}
