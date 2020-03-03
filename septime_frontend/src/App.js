import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import AboutThisApp from "./components/AboutThisApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        <AboutThisApp/>
        </header>
      </div>
    );
  }
}

export default App;
