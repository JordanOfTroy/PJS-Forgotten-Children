import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Contact from './Components/Contact'
import History from './Components/History'
import Home from './Components/Home'
import ThankYous from './Components/ThankYous'
import Volunteer from './Components/Volunteer'
import Blog from './Components/Blog'

export default (
  <Switch>
    <Route exact path = '/' component = {Home}/>
    <Route path ='/contact' component = {Contact}/>
    <Route path = '/history' component = {History}/>
    <Route path = '/thankyous' component = {ThankYous}/>
    <Route path = '/volunteer' component = {Volunteer}/>
    <Route path = '/blog' component = {Blog}/>
  </Switch>
)