const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Profile = mongoose.model('profile')
const oneProfile = require('../middlewares/oneProfile')

module.exports = app => {
  app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
    const { name, birthday } = req.body
    const maxSavings = 0
    const showMaxSavings = true
    const targetSavings = 0
    const percentSaved = 0.8
    const monthlySpend = 0
    const percentSpent = 0.2
    const rewardSchedule = 0
    const rewardBudget = 0
    const activeGoal = false
    const stage = 0
    const rewardType = '_____'
    const rewardNotes = ''

    const profile = new Profile({
      name,
      birthday,
      maxSavings,
      showMaxSavings,
      targetSavings,
      percentSaved,
      monthlySpend,
      percentSpent,
      rewardSchedule,
      rewardBudget,
      activeGoal,
      stage,
      rewardType,
      rewardNotes,
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
