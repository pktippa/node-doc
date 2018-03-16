const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getJson', (req, res) => res.json({ msg : 'Hello World!'}))
app.post('/postJson', (req, res) => {
  console.log('JSON Body')
  console.log(JSON.stringify(req.body, null, 2))
  res.send('Hello World!')
})

app.listen(8085, () => console.log('Example app listening on port 8085!'))