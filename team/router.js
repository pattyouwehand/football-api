const { Router } = require('express')
const Team = require('./model')
const router = new Router()

//Get all the team information
router.get(
  '/team',
  (request, response, next) => {
    Team
      .findAll()
      .then(teamList => response.json(teamList))    //choose a name
      .catch(err => next(err))
  })

//Create a new team
router.post(
  '/team',
  (request, response, next) => {
    Team
      .create(request.body)
      .then(team => response.json(team))
      .catch(err => next(err))
  })

//Get specific information of a team
router.get(
  '/team/:id',
  (request, response, next) => {
    Team
      .findByPk(request.params.id, { include: [City] })
      .then(teamId => response.json(teamId))
      .catch(err => next(err))
  })

//Update a team
router.put(
  '/team/:id',
  (request, response, next) => {
    Team
      .findByPk(request.params.id)
      .then(team => team.update(request.body))
      .then(team => response.json(team))
      .catch(err => next(err))
  })

//Delete a team
router.delete(
  '/team/:id',
  (request, response, next) => {
    Team
      .destroy({
        where: {
          id: request.params.id
        }
      })
      .then(number => response.json({ deleted: number }))
      .catch(err => next(err))
  }
)


module.exports = router