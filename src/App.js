import React, { Component } from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Content from './components/content';

import './App.css';

class App extends Component {
  render() {

    return (
    	
      <div className="App">
        <Header />
        <Navbar />
        <Content />
        
      </div>
    );
  }
}

export default App;
