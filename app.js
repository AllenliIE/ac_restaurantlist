//require package used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
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
//setting session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
//use passport
usePassport(app)

app.use(flash())  //use flash
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')  // setting success_msg 
  res.locals.warning_msg = req.flash('warning_msg')  // setting warning_msg
  next()
})

//use routes 
app.use(routes)

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Exprest is listening on localhost: ${port}`)
})