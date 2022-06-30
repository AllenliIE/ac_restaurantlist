//require package used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurants.json').results
const app = express()
const port = 3000
const Restaurantlist = require('./models/restaurantlist')

//setting mongoose
const mongoose = require('mongoose') //載入mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) //連線到mongoDB
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


//setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting static files
app.use(express.static('public'))

//routes setting
app.get('/', (req, res) => {

  Restaurantlist.find()
    .lean()
    .then(restaurantlists => res.render('index', { restaurantlists }))
    .catch(error => console.error(error))
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.find(
    restaurant => restaurant.id === Number(req.params.restaurant_id)
  )
  res.render('show', { restaurant })
})

app.get('/search', (req, res) => {
  if (!req.query.keyword) {
    return res.redirect('/')
  }
  const keyword = req.query.keyword
  const keywords = req.query.keyword.trim().toLowerCase()
  const restaurants = restaurantList.filter(restaurant =>
    restaurant.name.toLowerCase().includes(keywords) ||
    restaurant.category.includes(keywords)
  )
  res.render('index', { restaurants: restaurants, keyword })
})

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Exprest is listening on localhost: ${port}`)
})