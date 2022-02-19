const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type:String, required:true, minlength: 2,maxlength:40},
    email: {type:String, required:true, minlength: 2,maxlength:40},
password:{type:String, required:true, minlength: 8,maxlength:40},
createdAt: {type:Date, default: Date.now},
admin:{type: Boolean, default:false}

})

module.exports = mongoose.model('User', userSchema)