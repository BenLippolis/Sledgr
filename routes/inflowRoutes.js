const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Inflow = mongoose.model('inflow')
const Profile = mongoose.model('profile')

module.exports = app => {
  // Create an inflow
  app.post('/api/inflow', requireLogin, async (req, res) => {
    const { title, amount } = req.body
    const inflow = new Inflow({
      title,
      amount,
      _user: req.user.id
    })
    // Update the users profile net income to reflect inflow creation
    // Find users profile
    const profile = await Profile.findOne({ _user: req.user.id })
    // Increase max savings by new inflow amount
    profile.maxSavings += inflow.amount
    // Use updated max savings to update target savings
    profile.targetSavings = profile.maxSavings * profile.percentSaved
    // Use updated target savings to update monthly spend
    profile.monthlySpend = profile.targetSavings * profile.percentSpent
    await profile.save()

    try {
      await inflow.save()
      res.send(inflow)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  // Retrieve all inflows
  app.get('/api/inflows', requireLogin, async (req, res) => {
    const inflows = await Inflow.find({ _user: req.user.id })
    res.send(inflows)
  })

  // Destroy an inflow
  app.post('/api/inflow/delete', requireLogin, async (req, res) => {
    // Get inflow id from request body
    const { inflowId } = req.body
    const inflow = await Inflow.findOne({ _id: inflowId })

    await Inflow.remove({ _id: inflowId }, function (err) {
      if (err) {
        res.send(err)
      } else {
        res.send({ data: 'Record has been Deleted!' })
      }
    })
    // Update the profile net income to reflect the inflows destruction
    // Find users profile
    const profile = await Profile.findOne({ _user: req.user.id })
    // Decrease max savings by deleted inflow amount
    profile.maxSavings -= inflow.amount
    // Use updated max savings to update target savings
    profile.targetSavings = profile.maxSavings * profile.percentSaved
    // Use updated target savings to update monthly spend
    profile.monthlySpend = profile.targetSavings * profile.percentSpent
    await profile.save()
  })
}
