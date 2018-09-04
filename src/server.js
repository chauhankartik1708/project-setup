const express = require('express')
const path = require('path')

const app = express()

app.use('/',express.static(path.join(__dirname,'../public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => res.send('Hello Kartik Singh Chauhan'))

app.listen(2929,() => {
    console.log('Server started on port 2929')
})