const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/demo-note', {useNewUrlParser: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connectioon error'))
db.once('open', function () {
    console.log('欢迎')
})

module.exports = db