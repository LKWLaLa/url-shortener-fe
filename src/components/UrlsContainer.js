import React, { Component } from 'react'
import Url from './Url'
import Footer from './Footer'

class UrlsContainer extends Component {

  constructor(){
    super();
    this.state = { urls: []}
  }

  ComponentDidMount(){
    fetch('https://shrink-me.herokuapp.com/top-100').then(res => res.json())
    .then(res => {
      this.setState({urls: res})
    })
  }

  mapUrls = () => {
    this.state.urls.map((url) => <Url data={url} />)
  }

  render() {
    return (
      <div>
        {this.mapUrls()}
        <Footer />
      </div>
    );
  }
}

export default UrlsContainer;