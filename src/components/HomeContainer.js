import React, { Component } from 'react'
import Input from './Input'
import Result from './Result'

class HomeContainer extends Component {

  constructor(){
    super();

    this.state = {
      shortUrl:'',
      longUrl: ''
    }
  }

  postUrl = (longUrl) => {
    fetch('http://shrink-me.herokuapp.com/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: longUrl})
    }).then(res => res.json())
      .then(res => {
        this.setState({shortUrl: res, longUrl: longUrl})
      })
  }

  render() {
    return (
      <div>
        "Home Container"
        <Input postUrl={this.postUrl}/>
        <Result />
      </div>
    );
  }
}

export default HomeContainer;