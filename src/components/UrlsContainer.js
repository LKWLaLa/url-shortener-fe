import React, { Component } from 'react'
import Url from './Url'
import Footer from './Footer'

class UrlsContainer extends Component {

  constructor(){
    super();
    this.state = { urls: []}
  }

  componentDidMount(){
    fetch('https://shrink-me.herokuapp.com/top-100').then(res => res.json())
    .then(res => {
      this.setState({urls: res})
    })
  }

  mapUrls = () => {
    return this.state.urls.map((url) => <li><Url data={url} /></li>)
  }

  render() {
    return (
      <div className="urls-container">
        <h3>The 100 most frequently accessed short URLs: </h3>
        <ol className="urls-list">
        {this.mapUrls()}
        </ol>
        <Footer />
      </div>
    );
  }
}

export default UrlsContainer;