import React from 'react';

const Result = (props) => {  
  return(
    <div className="result-box">
      <p className="full-url">Original: {props.fullUrl}</p>
      <p className="short-url">
        {props.shortUrl ? `https://shrink-me.herokuapp.com/${props.shortUrl}` : null }
      </p>
    </div>
  )
}

export default Result;