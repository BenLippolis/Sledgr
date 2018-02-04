const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Goal = mongoose.model('goal')

module.exports = app => {
  app.post('/api/goal', requireLogin, async (req, res) => {
    const goal = new Goal({
      _user: req.user.id
    })
    goal.balances.push({
      value: 100
    })
    try {
      await goal.save()
      res.send(goal)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  app.patch('/api/goal/update', requireLogin, async (req, res) => {
    try {
      const goal = await Goal.findOneAndUpdate(
        { _user: req.user.id },
        req.body,
        { new: true }
      )
      res.send(goal)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
