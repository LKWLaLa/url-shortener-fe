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
    fetch('https://shrink-me.herokuapp.com/urls', {
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

  results = () => {
    if(this.state.fullUrl && this.state.shortUrl){  
      return <Result fullUrl={this.state.fullUrl} shortUrl={this.state.shortUrl}/>
    }
    return null
  }

  render() {
    return (
      <div>
        <Input postUrl={this.postUrl}/>
        {this.results()}
      </div>
    );
  }
}

export default HomeContainer;