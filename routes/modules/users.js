const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})

//setting login and register routers
router.post('/login', (req, res) => {

})
router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  //use Body Parser to link register.hbs's body
  const { name, email, password, confirmPassword } = req.body

  User.findOne({ email }).then(user => {
    //find data and redirect
    if (user) {
      console.log('User already exists.')
      res.render('register', {
        name,
        email,
        password,
        confirmPassword
      })
    } else {
      //create data and redirect
      return User.create({
        name,
        email,
        password
      })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  })
    .catch(err => console.log(err))
})

module.exports = router
