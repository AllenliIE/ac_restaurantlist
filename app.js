//require package used in the project
const express = require('express')
const exphbs = require('express-handlebars')
// const restaurantList = require('./restaurants.json').results 
const port = 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()

//load config mongoose
require('./config/mongoose')

//setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
//use method-override
app.use(methodOverride('_method'))
//setting static files
app.use(express.static('public'))

app.use(routes)

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Exprest is listening on localhost: ${port}`)
})