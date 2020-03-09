import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import AboutThisApp from "./components/AboutThisApp";
import ProductHowItWorks from "./components/ProductHowItWorks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        <AboutThisApp/>
        <ProductHowItWorks/>
        </header>
      </div>
    );
  }
}

export default App;
