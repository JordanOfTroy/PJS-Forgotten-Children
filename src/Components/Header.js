import React, {Component} from 'react'
import Nav from './Nav'

class Header extends Component {
  render () {
    return(
      <div>
        <h1>Header.js</h1>
        <Nav/>
      </div>
    )
  }
}

export default Header