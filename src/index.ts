import express, { query } from 'express'

const app = express()
const port = 4000

let key : string
let value : string

app.post('/set', (req, res) => {
  if (req.query.somekey){
    key = Object.keys(req.query)[0]
    const queryVal = req.query.somekey
    if (isString(queryVal)){
      value = queryVal
      res.send('Got it!')
    }
  }
})

app.get('/get', (req, res) => {
  if (req.query.key){
    const queryVal = req.query.key
    if (isString(queryVal) && queryVal == 'somekey'){
      res.send(value)
    }
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

function isString(input: any): input is String {
  if (typeof input === 'string' || input instanceof String){
    return true
  }
  return false
}