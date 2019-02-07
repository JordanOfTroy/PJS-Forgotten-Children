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
  }
}