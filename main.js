const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')



const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("hey it is a get request")
  res.send('Hello World21!')
})

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.post('/', (req, res) => {
    console.log("hey it is a post request")
  res.send('Hello World post!')
})

app.get('/', (req, res) => {
  console.log("hey it is a get request")
res.send('Hello World2!')
})



// to get index.html file
app.get('/index', (req, res) => {
  console.log("hey it is index page")
res.sendFile('templates/index.html',{root: __dirname})
})


app.get('/api', (req, res) => {
res.json({a:1, b:2, c:3, d:4})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      