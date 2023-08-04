const express = require('express')
const dateFormat = require('date-format')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/instagram', (req, res) => {
  const instaInfo = {
    username: 'johndoe',
    followers: 422,
    following: 200,
    date: dateFormat.asString('dd-MM-yyyy hh:mm:ss', new Date()),
  }

  res.status(200).json(instaInfo)
})

app.get('/api/twitter', (req, res) => {
  const twitterInfo = {
    username: 'johndoe',
    followers: 499,
    following: 222,
    date: dateFormat.asString('dd-MM-yyyy hh:mm:ss', new Date()),
  }

  res.status(200).json(twitterInfo)
})

app.get('/api/linkedin', (req, res) => {
  const linkedinInfo = {
    username: 'johndoe',
    followers: 499,
    following: 190,
    date: dateFormat.asString('dd-MM-yyyy hh:mm:ss', new Date()),
  }

  res.status(200).json(linkedinInfo)
})

app.get('/api/:param', (req, res) => {
  res.status(200).json({ param: req.params.param })
})

app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`)
})
