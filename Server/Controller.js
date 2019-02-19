require('dotenv').config()
const bcrypt = require('bcryptjs')

let session_id_Count = 1

module.exports = {
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