const mongoose = require('mongoose')
const config  = require('../configs/env.config.js');
mongoose.set("strictQuery", false);
const con = async ()=>{
    try {
        await mongoose.connect(config.databaseUrl)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = con