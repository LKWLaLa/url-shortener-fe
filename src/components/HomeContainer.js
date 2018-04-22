import React, { Component } from 'react'
import Input from './Input'
import Result from './Result'

class HomeContainer extends Component {

  constructor(){
    super();

    this.state = {
      shortUrl:'',
      fullUrl: ''
    }
  }

  postUrl = (fullUrl) => {
    fetch('http://shrink-me.herokuapp.com/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: fullUrl})
    }).then(res => res.json())
      .then(res => {
        this.setState({shortUrl: res, fullUrl: fullUrl})
      })
  }

  render() {
    return (
      <div>
        <Input postUrl={this.postUrl}/>
        <Result fullUrl={this.state.fullUrl} shortUrl={this.state.shortUrl}/>
      </div>
    );
  }
}

export default HomeContainer;