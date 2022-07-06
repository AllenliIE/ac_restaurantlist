const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurants.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < restaurantList.length; i++) {
    Restaurant.create({
      ...restaurantList[i]
    })
  }
})