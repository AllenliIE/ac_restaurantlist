const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//setting search function
router.get('/', (req, res) => {
  const keyword = req.query.keyword

  return Restaurant.find()
    .lean()
    .then(Restaurant => {
      const restaurants = Restaurant.filter(list => {
        return list.name.toLowerCase().includes(keyword.toLowerCase()) ||
          list.category.toLowerCase().includes(keyword.toLowerCase())
      })
      res.render('index', { restaurants, keyword })
    })
    .catch(error => console.error(error))
})
module.exports = router