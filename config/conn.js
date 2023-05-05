const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo').then((data) => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
})

