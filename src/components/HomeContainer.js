import React, { Component } from 'react'
import Input from './Input'
import Result from './Result'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        "Home Container"
        <Input />
        <Result />
      </div>
    );
  }
}

export default HomeContainer;