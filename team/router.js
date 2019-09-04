const { Router } = require('express')
const Team = require ('./model')

const router = new Router()

router.get('/team', (req, res, next) => {
  Team
  .findAll()
  .then(teamList => res.json(teamList))
  .catch(err => next(err))  
})

module.exports = Router