const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("hey it is a get request")
  res.send('Hello World2!')
})

app.use(express.static("public"))

app.post('/', (req, res) => {
    console.log("hey it is a post request")
  res.send('Hello World post!')
})

app.get('/', (req, res) => {
  console.log("hey it is a get request")
res.send('Hello World2!')
})

app.get('/index', (req, res) => {
  console.log("hey it is index page")
res.sendFile('templates/index.html',{root: __dirname})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      