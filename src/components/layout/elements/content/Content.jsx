import React from 'react';
// Import routing components
import {Router, Route} from 'react-router';
import Home from '../../pages/home/Home.jsx';
import Contact from '../../pages/contact/Contact.jsx';

// Styles
import './Content.scss';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Router>
            <div className="container">
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
  }
}
