import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header/>
          {Routes}
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
