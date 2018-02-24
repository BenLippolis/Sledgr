const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Outflow = mongoose.model('outflow')
const Profile = mongoose.model('profile')

module.exports = app => {
  app.post('/api/outflow', requireLogin, async (req, res) => {
    const { title, amount } = req.body
    const outflow = new Outflow({
      title,
      amount,
      _user: req.user.id
    })
    try {
      await outflow.save()
      res.send(outflow)
    } catch (err) {
      res.status(422).send(err)
    }
    // Update the users profile net income to reflect outflow creation
    const profile = await Profile.findOne({ _user: req.user.id })
    profile.maxSavings -= outflow.amount
    profile.targetSavings = profile.maxSavings * profile.percentSaved
    profile.monthlySpend = profile.targetSavings * profile.percentSpent
    await profile.save()
  })

  app.get('/api/outflows', requireLogin, async (req, res) => {
    const outflows = await Outflow.find({ _user: req.user.id })
    res.send(outflows)
  })

  app.post('/api/outflow/delete', requireLogin, async (req, res) => {
    const { outflowId } = req.body
    // take the id from the request and find the outflow object
    const outflow = await Outflow.findOne({ _id: outflowId })

    await Outflow.remove({ _id: outflowId }, function (err) {
      if (err) {
        res.send(err)
      } else {
        res.send({ data: 'Record has been Deleted!' })
      }
    })
    // Update the users profile net income to reflect the outflows destruction
    const profile = await Profile.findOne({ _user: req.user.id })
    profile.maxSavings += outflow.amount
    profile.targetSavings = profile.maxSavings * profile.percentSaved
    profile.monthlySpend = profile.targetSavings * profile.percentSpent
    await profile.save()
  })
}
