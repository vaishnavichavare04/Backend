const mongoose = require('mongoose')



const connect = () => {
    //mongoose.connect('mongodb://localhost:27017/udu')
    mongoose.connect('mongodb://127.0.0.1:27017/udu', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

        .then(() => { console.log("database has been connected") })
        .catch((err) => console.log(err))
}


module.exports = connect