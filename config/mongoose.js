//setting mongoose
const mongoose = require('mongoose') //load mongoose
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/restaurant'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) //open useCreateIndex

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db