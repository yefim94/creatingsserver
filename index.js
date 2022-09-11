const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
