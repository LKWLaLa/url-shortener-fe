import React, { Component } from 'react'

class Input extends Component {

  constructor(){
    super();

    this.state = {
      value:'',
      valid: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isValidURL(this.state.value)){
      this.props.postUrl(this.state.value)
      this.setState({value: '', valid: true})
    }
    else {
      this.setState({valid: false})
    }    
  }

  errorMessage = () => {
    if (this.state.valid || this.state.value === ''){
      return null
    } 
    return <div className="error">Please enter a valid URL.</div>
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  isValidURL = (input) => {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(input)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="url-input" value={this.state.value} 
                 onChange={this.handleChange} 
                 placeholder="Paste your URL here - (must begin with http or https)" />
        </form>
        {this.errorMessage()}
      </div>
    );
  }
}

export default Input;