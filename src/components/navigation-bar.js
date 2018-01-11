import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

const NavigationBar = (props) => {
return (
  <div>
    <h1>{props.title}</h1>
  {props.links.map((link, i)=> <li key={i}>{link.text}</li>)}
  </div>
)
}

export default NavigationBar;
