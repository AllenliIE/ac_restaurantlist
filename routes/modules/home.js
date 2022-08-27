const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


//setting Schema to render index
router.get('/', (req, res) => {
  const userId = req.user._id

  Restaurant.find({ userId })
    .lean()
    .sort({ _id: 'asc' }) //A -> Z
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

module.exports = router