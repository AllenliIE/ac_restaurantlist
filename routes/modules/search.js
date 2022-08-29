const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//setting search function
router.get('/', (req, res) => {
  const userId = req.user._id
  const keywords = req.query.keyword?.trim()
  const regExp = new RegExp(keywords, 'i')

  Restaurant.find({
    $and: [
      { $or: [{ name: regExp }, { category: regExp }] },
      { userId }]
  })
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => {
      res.render('index', { restaurants, keywords })
    })
    .catch(error => console.error(error))
})
module.exports = router
