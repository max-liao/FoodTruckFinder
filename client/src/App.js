import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Jumbotron from "./components/Jumbotron";
// import { Col, Row, Container } from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href={require("./css/style.css")} rel="stylesheet" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Us</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
