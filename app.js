//require package used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
//load config mongoose
require('./config/mongoose')

const port = 3000
const app = express()

//setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
//use method-override
app.use(methodOverride('_method'))
//setting static files
app.use(express.static('public'))
//use routes 
app.use(routes)

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Exprest is listening on localhost: ${port}`)
})