import React from 'react';

// Components
import Header from '../../elements/header/Header.jsx';
import Navigation from '../../elements/navigation/Navigation.jsx';
import Footer from '../../elements/footer/Footer.jsx';

// Styles
import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="row">
            nbm
          <Header />
          <Navigation />
          <div className="row">
            your content here
          </div>
          <Footer />
        </div>
    );
  }
}

export default Home;
