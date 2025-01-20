const mongoose = require("mongoose")


const todoSchmea = mongoose.Schema({
    task:{type:String,required:true},
    details:{type:String,required:true}
})


const Todo = mongoose.model('Todo',todoSchmea)


module.exports = Todo