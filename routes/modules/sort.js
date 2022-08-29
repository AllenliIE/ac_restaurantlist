const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//get the sort router
router.get('/:sort', (req, res) => {
  const userId = req.user._id
  const sortOptions = {
    'nameAse': 'name',
    'nameDesc': '-name',
    'category': 'category',
    'location': 'location'
  }

  let sortParam = sortOptions[req.params.sort] || ''
  Restaurant
    .find({ userId })
    .lean()
    .sort(sortParam)
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => { console.log(error) })
})

module.exports = router