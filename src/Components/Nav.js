import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

// The Nav will contain four drop options. Home, Blog, Who We Are (about), What We Do (Volunteer) 
// The "about" and "Volunteer" will open drop-down menus
// About will contain: History, Thank Yous, and Contact links
// Volunteer will contain links to Volunteer.js, to the appropriate spot on the page. 

class Nav extends Component {
  render () {
    return(
      <div>
        <h1>Nav.js</h1>
        <Link to = '/'>Home</Link> 
        <Link to = '/history'>Who We Are</Link>
        <Link to = '/volunteer'>What We Do</Link>
        <Link to = './blog'>Blog</Link>
      </div>
    )
  }
}

export default Nav