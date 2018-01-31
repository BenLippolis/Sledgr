const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Goal = mongoose.model('goal')

module.exports = app => {
  app.post('/api/goal', requireLogin, async (req, res) => {
    const goal = new Goal({
      _user: req.user.id
    })
    try {
      await goal.save()
      res.send(goal)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
