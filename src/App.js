import React, { Component } from 'react';
// import logo from './logo.svg';
import HeaderBg from './components/headerBg/HeaderBg';
import TopBar from './components/topBar/TopBar';
import SeparateBar from './components/separateBar/SeparateBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
          <HeaderBg></HeaderBg>
          <SeparateBar iconName="FaClipboardList" content="工作经历">
            <h1>Content</h1>
          </SeparateBar>
        </div>
      </div> 
    );
  }
}

export default App;
