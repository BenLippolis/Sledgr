const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Goal = mongoose.model('goal')

module.exports = app => {
  // Create a goal
  app.post('/api/goal', requireLogin, async (req, res) => {
    const { maxSpend, weekCount } = req.body
    const goal = new Goal({
      maxSpend: maxSpend,
      weekCount: weekCount,
      _user: req.user.id
    })
    // Auto create a balance with value 100 (temp)
    goal.weeks.push({})
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
    const activeGoal = await Goal.findOne({ _user: req.user.id, active: true })
    res.send(activeGoal)
  })

  // Retieve active goal's weeks
  app.get('/api/goal_weeks', requireLogin, async (req, res) => {
    const activeGoal = await Goal.findOne({
      _user: req.user.id,
      active: true
    })
    res.send(activeGoal.weeks)
  })

  // Retrieve active goals active week
  app.get('/api/active_week', requireLogin, async (req, res) => {
    const activeGoal = await Goal.findOne({
      _user: req.user.id,
      active: true
    })
    const activeWeek = activeGoal.weeks.find(week => week.active === true)
    res.send(activeWeek)
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

  // Add a bad transaction
  app.patch('/api/goal/add_bad_txn', requireLogin, async (req, res) => {
    const { txnId } = req.body
    try {
      const activeGoal = await Goal.findOne({
        _user: req.user.id,
        active: true
      })
      activeGoal.badTransactions.push(txnId)
      await activeGoal.save()
      console.log('yay you added the txn id')
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
