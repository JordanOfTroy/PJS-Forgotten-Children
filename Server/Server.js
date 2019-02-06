require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive'),
      ctrl = require('./Controller'),
      app = express(),
      {
        CONNECTION_STRING,
        SERVER_PORT,
        SESSION_SECRET
      } = process.env 

  massive(CONNECTION_STRING).then(db => app.set('db', db))
  
  app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

  app.use(express.json())

  // add checkUserSession middleware here when/if time comes

 app.use(express.static(`${__dirname}/../build`))

/*****************************************************************/
// GET requests

// POST requests

// PUT Requests

// DELETE Requests

/*****************************************************************/

app.listen(SERVER_PORT, () => {
  console.log(`You're running on PORT: ${SERVER_PORT}`)
})