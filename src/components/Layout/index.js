import React from 'react';

import Header from '../containers/Header';
import Notes from '../containers/Notes';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Notes />
        <Footer />
      </div>
    );
  }
}

export default Layout;
