//require package used in the project
const express = require('express')
const exphbs = require('express-handlebars')
// const restaurantList = require('./restaurants.json').results 
const port = 3000
const Restaurant = require('./models/restaurant')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()

//setting mongoose
const mongoose = require('mongoose') //load mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) //link mongoDB
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.use(routes)

//setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
//use method-override
app.use(methodOverride('_method'))

//setting static files
app.use(express.static('public'))

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Exprest is listening on localhost: ${port}`)
})