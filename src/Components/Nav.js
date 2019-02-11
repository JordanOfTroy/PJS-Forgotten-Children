import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Nav extends Component {
  render () {
    return(
      <div>
        <h1>Nav.js</h1>
        <Link to = '/'>Home</Link>
        <Link to = '/history'>Who We Are</Link>
        <Link to = '/volunteer'>What We Do</Link>
      </div>
    )
  }
}

export default Nav