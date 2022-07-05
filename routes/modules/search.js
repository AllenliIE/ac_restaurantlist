const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//setting search function
router.get('/', (req, res) => {
  const keywords = req.query.keyword?.trim()
  const regExp = new RegExp(keywords, 'i')

  Restaurant.find({
    $or: [{ name: regExp }, { category: regExp }]
  })
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => {
      res.render('index', { restaurants, keywords })
    })
    .catch(error => console.error(error))
})
module.exports = router
