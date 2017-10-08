// Components
import Home from '../layout/pages/home/Home.jsx';

// Styles
import '../layout/pages/home/Home.scss';

// Dependencies
import React from 'react';

// Import routing components
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router path = "index.html" component={Home} history={newHistory} />
            </div>
        );
    }
}
