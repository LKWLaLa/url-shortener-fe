import React from 'react';
import { Link } from 'react-router-dom'

const Footer = (props) => { 

  let getLink = () => {
    if (props.path === "/top-100"){
      return <Link className="footer-link" to="/">Home</Link>
    }
    return <Link className="footer-link" to="/top-100">Top 100 Short URLs</Link>
  } 

  return(
    <div className="footer">
      {getLink()}
    </div>
  )
}

export default Footer;