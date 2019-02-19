require('dotenv').config()
const bcrypt = require('bcryptjs')

let session_id_Count = 1

module.exports = {

  /** ** ** ** ** GET ** ** ** ** **/

  getTest: (req, res) => {
    const db = req.app.get('db')
    db.test().then(test => {
      // console.log(test)
      res.status(200).send(test)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  getBlogPosts: (req, res) => { // SQL NEEDS TO BE WRITTEN
    const db = req.app.get('db')
    let {numOfBlogs} = req.params
    // Set up IF statement so I could use the same endpoint for displaying blogs.
    // I only want the 3 most recent for the homepage, so I will send a param of 3
    // on Blog.js the param sent will be 'all'.
    if (numOfBlogs === 3) {
      db.get_first_three_blog_posts().then(posts => {
        res.status(200).send(posts)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    } else {
      db.get_all_blog_posts().then(posts => {
        res.status(200).send(posts)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    }
  },


  /** ** ** ** ** POST ** ** ** ** **/

  newBlogPost: (req, res) => { // SQL NEEDS TO BE WRITTEN
    const db = req.app.get('db')
    let {newPost} = req.body
    // This should just add a new post to the DB and probably return nothing? 
    db.new_blog_post().then(response => {
      res.status(200).send(response)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  login: (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    db.check_for_user(username).then(user => {
      // SQL NEEDS TO BE WRITTEN
      // check_for_user.sql will check to see if the username exists and return user info
      // if truthy it means there is a user with the username
      if (user.length) {
        const validPassword = bcrypt.compareSync(password, user[0].password)
        if (validPassword) {
          req.session.user = user[0].username
          req.session.session_id = session_id_Count
          session_id_Count++
          res.sendStatus(200)
        } else {
          res.status(200).send('Invalid Password')
        }
      } else {
        res.status(200).send('Username does not exist')
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  registerNewUser: (req, res) => {
    const db = req.app.get('db')
    const {firstName, lastName, username, password, email} = req.body
    db.check_for_user(username).then(user => {
      if (user[0]) {
        res.status(200).send('Username taken. Please Try again')
      } else {
        const salt = bcrypt.salt(10) // makes rando string. Num declares level of security. bugger num is better.
        const hash = bcrypt.hashSync(password, salt) // mixes password with salt to make secure string to store in database.
        db.register_new_user(firstName, lastName, username, hash, email).then(user => {
          // SQL NEEDS TO BE WRITTEN
          req.session.user // makes session
          req.session.user = user[0].username
          req.session.session_id = session_id_Count
          session_id_Count++
          res.status(200).send(user[0])
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  /** ** ** ** ** PUT ** ** ** ** **/

  /** ** ** ** ** DELETE ** ** ** ** **/

  deleteBlogPost: (req, res) => { // SQL NEEDS TO BE WRITTEN
    const db = req.app.get('db')
    let {blogID} = req.params
    // Will delete a specific blog identified by its ID on the table.
    db.delete_blog_by_id().then(response => {
      res.status(200).send(response)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

}