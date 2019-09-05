const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()             //npm install body-parser
const db = require('./db')

const teamRouter = require('./team/router')
const playerRouter = require('./player/router')

//jsonParser always above the routes, otherwise post etc will not work correctly
app.use(jsonParser)

app.use(teamRouter)
app.use(playerRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
//app.get('/', (req, res) => res.send('Hello World!'))             //check