const express = require('express')
const cors = require('cors')
const chefData = require("./Data/chef_data.json")
const fevior = require("./Data/fevior.json")
const app = express()
const port = 5000
app.use(cors())



app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route for all data 
app.get('/chef',(req,res) =>{
    res.send(chefData)
})


// route for spacific data 
app.get("/chef/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    const findData = chefData.chefs.find(chef=> chef.id === id)
    res.send(findData);
})

// route for fevior 

app.get('/faber',(req,res)=>{
  res.send(fevior)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})