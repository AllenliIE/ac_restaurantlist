const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const restaurantList = require('./restaurants.json').results
const User = require('../user')
const db = require('../../config/mongoose')
const SEED_USERS = [{
  name: 'user1',
  email: 'user1@example.com',
  password: '12345678'
}, {
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678'
}]

db.once('open', () => {
  SEED_USERS.map(SEED_USER => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(SEED_USER.password, salt))
      .then(hash => User.create({
        name: SEED_USER.name,
        email: SEED_USER.email,
        password: hash
      })
      ).then(user => {
        if (user.email === 'user1@example.com') {
          start = 0
        } else if (user.email === 'user2@example.com') {
          start = 3
        }
        return Promise.all(Array.from(
          { length: 3 },
          (_, i) => {
            i += start
            restaurantList[i].userId = user._id
            return Restaurant.create(restaurantList[i])
          }))
      }).then(() => {

        console.log('usersAdmin done.')
        process.exit()
      })

    console.log('done')
  })
})