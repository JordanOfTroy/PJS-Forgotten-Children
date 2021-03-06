require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive'),
      ctrl = require('./Controller'),
      app = express(),
      checkUserSession = require('./Middleware/checkUserSession'),
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

  app.use(checkUserSession)

 app.use(express.static(`${__dirname}/../build`))

/*****************************************************************/
// GET requests
app.get(`/api/test`, ctrl.getTest)
app.get('/api/blogs/:numOfBlogs', ctrl.getBlogPosts )

// POST requests
app.post(`/api/blog`, ctrl.newBlogPost)
app.post(`/api/login`, ctrl.login)
app.post(`/api/register`, ctrl.registerNewUser)

// PUT Requests
app.put(`/api/user`, ctrl.updateUserInfo)
app.put(`/api/updateContactInfo/:info`, ctrl.updateContactInfo)

// DELETE Requests
app.delete(`/api/blog/:blogID`, ctrl.deleteBlogPost)
app.delete(`/api/user`, ctrl.deleteUser)

/*****************************************************************/

app.listen(SERVER_PORT, () => {
  console.log(`You're running on PORT: ${SERVER_PORT}`)
})