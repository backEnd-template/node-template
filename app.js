const express = require('express');
const connectDb = require('./src/services/db.service.js')
const bodyParser = require('body-parser')
const userRouter = require('./src/routes/user.route.js')

const port = 3000;
const app = express();
app.use(bodyParser.json());
connectDb()

app.use('/users',userRouter)

app.listen(process.env.PORT || port,()=>{
    console.log(`🚀 http://127.0.0.1:${port}`)
})