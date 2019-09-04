const teamRouter = require ('./team/router')

const express = require('express')
const app = express()
const port = process.env.PORT || 4000 

app.use(teamRouter)
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Football-api listening on port ${port}!`))