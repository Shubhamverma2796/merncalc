const mongoose = require('mongoose');


const keySchema = new mongoose.Schema({
    keys:[{key:String,val:Number}]
})


const Keys = mongoose.model("Keys",keySchema);


module.exports = Keys;