import React from 'react';

const Url = (props) => {  
  let {short_url, full_url, frequency} = props.data
  return(
    <div className="url-item">
      <span className="frequency">{frequency} hits</span>
      <span className="short-url">{short_url}</span>
      <div className="full-url">
        Full URL: <a href={full_url}>{full_url}</a>
      </div>
    </div>
  )
}

export default Url;