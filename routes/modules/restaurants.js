const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//create form function
router.get('/new', (req, res) => {
  return res.render('new')
})

//setting restaurant function
router.post('/', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  const restaurant = new Restaurant({
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description
  })

  return restaurant.save()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//setting show.handlebars
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

//setting edit function
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findByIdAndUpdate(id, req.body)
    .catch(error => console.log(error))
})

//setting delete function
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router