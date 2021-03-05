let path = require('path')
let express = require('express');
const { read } = require('fs');
let app = express()

const port = 4000


let cars = [{name: 'bmw'}]


app.use((req, res, next) => {
  console.log("logging: ", req.path)
  if (req.path === '/api/cars') {
    res.status(400).json({"error": "ololo"})
  } else {
    next()
  }
})

app.get('/api/cars', (req, res) =>{
    res.json(cars)
})

app.get('/api/planes', (req, res) =>{
  res.json([{'model': 'f-16'}])
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
