const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Goal = mongoose.model('goal')

module.exports = app => {
  // Create a goal
  app.post('/api/goal', requireLogin, async (req, res) => {
    const { max_spend } = req.body
    const goal = new Goal({
      _user: req.user.id
    })
    // Auto create a balance with value 100 (temp)
    goal.weeks.push({
      max_spend: max_spend
    })
    try {
      await goal.save()
      res.send(goal)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  // Retrieve all goals
  app.get('/api/goals', requireLogin, async (req, res) => {
    const goals = await Goal.find({ _user: req.user.id })
    res.send(goals)
  })

  // Retrieve active goal
  app.get('/api/active_goal', requireLogin, async (req, res) => {
    const active_goal = await Goal.findOne({ _user: req.user.id, active: true })
    res.send(active_goal)
  })

  // Retieve active goal's weeks
  app.get('/api/goal_weeks', requireLogin, async (req, res) => {
    const active_goal = await Goal.findOne({
      _user: req.user.id,
      active: true
    })
    res.send(active_goal.weeks)
  })

  // Retrieve active goals active week
  app.get('/api/active_week', requireLogin, async (req, res) => {
    const active_week = await Goal.findOne({
      _user: req.user.id,
      active: true,
      weeks: { $elemMatch: { active: true } }
    })
    res.send(active_week)
  })

  // Update a specific goal
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
