const express = require("express")

const app = express()

app.post("/data/post" , (req,res) => {
    res.send("you post new data")

})

app.get("/data/get", (req,res) => {
    res.send("you get get data in with out runinin using npm start") 
})
app.put("/data/update", (req,res) => {
    res.send("you Updata  data")
})

app.delete("/data/delete", (req,res) => {
    res.send("you delete data")
})
app.listen(9000, () => console.log("Is  test"))