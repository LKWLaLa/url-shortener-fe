import React, { Component } from 'react'
import '../App.css'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import UrlsContainer from './UrlsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shrink Me</h1>
          <p>Your friendly neighborhood URL shortener</p>
        </header>
        <Switch>
          <Route exact path= '/' render={(props)=><HomeContainer {...props} /> } />          
          <Route exact path= '/top-100' render={(props)=><UrlsContainer {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
