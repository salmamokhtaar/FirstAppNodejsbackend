const express = require('express')
const app = express()


app.get('/' ,(req,res) => {
    res.send("this is default")
})
app.get('/home' ,(req,res) => {
    res.send("this is home")
})
app.get('/project' ,(req,res) => {
    res.send("this is project page")
})
app.get('/skills' ,(req,res) => {
    res.send("this is Skills page ")
})


app.listen(3000,()=> console.log('listening'))