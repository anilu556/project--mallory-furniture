import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Routes />
      <Footer />
    </React.Fragment>
    );
  }
}

export default App;
