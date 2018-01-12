import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

const NavigationBar = (props) => {
  return (
    <div className="navigation-bar">
      <h1>{props.title}</h1>
      <nav className="navigation-bar-nav">
        <ul>{props.links.map((link, i)=> <li key={i}><a href={link.href}>{link.text}</a></li>)}</ul>
      </nav>
    </div>
  )
}

export default NavigationBar;
