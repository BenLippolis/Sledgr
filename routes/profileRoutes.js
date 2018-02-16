const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Profile = mongoose.model('profile')
const oneProfile = require('../middlewares/oneProfile')

module.exports = app => {
  app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
    const { name, birthday } = req.body
    const max_savings = 0
    const show_max_savings = true
    const target_savings = 0
    const percent_saved = 0.8
    const monthly_spend = 0
    const percent_spent = 0.2
    const reward_schedule = 0
    const reward_budget = 0
    const active_goal = false
    const stage = 0
    const reward_type = ''
    const reward_notes = ''

    const profile = new Profile({
      name,
      birthday,
      max_savings,
      show_max_savings,
      target_savings,
      percent_saved,
      monthly_spend,
      percent_spent,
      reward_schedule,
      reward_budget,
      active_goal,
      stage,
      reward_type,
      reward_notes,
      _user: req.user.id
    })
    try {
      await profile.save()
      res.send(profile)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  app.get('/api/profile', requireLogin, async (req, res) => {
    const profile = await Profile.findOne({ _user: req.user.id })
    res.send(profile)
  })

  app.patch('/api/profile/update', requireLogin, async (req, res) => {
    try {
      const profile = await Profile.findOneAndUpdate(
        { _user: req.user.id },
        req.body,
        { new: true }
      )
      res.send(profile)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
