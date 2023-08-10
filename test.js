const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) // 비워 놓으면 모든 요청 허용

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
  // const q = req.params   //params
  // console.log(q.id)
  const q = req.query   // query
  console.log(q.q)
  console.log(q.name)
  res.json({'userid': q.name})
})

app.get('/cat', (req, res) => {
  res.json({'sound': '야옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})