import React, { Component } from 'react'
import '../App.css'
import HomeContainer from './HomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shrink Me</h1>
          <p>Your friendly neighborhood URL shortener</p>
        </header>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
