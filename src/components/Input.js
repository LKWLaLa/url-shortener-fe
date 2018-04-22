import React, { Component } from 'react'

class Input extends Component {

  constructor(){
    super();

    this.state = {
      value:''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postUrl(this.state.value)
    this.setState({value: ''})
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="url-input" value={this.state.value} 
                 onChange={this.handleChange} 
                 placeholder="Paste your url here." />
        </form>
      </div>
    );
  }
}

export default Input;