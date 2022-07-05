const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//setting search function
router.get('/', (req, res) => {
  const keywords = req.query.keyword

  return Restaurant.find()
    .lean()
    .then(Restaurant => {
      const restaurants = Restaurant.filter(list => {
        return list.name.toLowerCase().includes(keywords.toLowerCase()) ||
          list.category.toLowerCase().includes(keywords.toLowerCase())
      })
      res.render('index', { restaurants, keywords })
    })
    .catch(error => console.error(error))
})
module.exports = router
