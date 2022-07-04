const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//setting search function
router.get('/search', (req, res) => {
  if (!req.query.keyword) {
    return res.redirect('/')
  }
  const keyword = req.query.keyword
  const keywords = req.query.keyword.trim().toLowerCase()
  const restaurants = Restaurant.filter(restaurant =>
    restaurant.name.toLowerCase().includes(keywords) ||
    restaurant.category.includes(keywords)
  )
  res.render('index', { restaurants: restaurants, keyword })
})

module.exports = router