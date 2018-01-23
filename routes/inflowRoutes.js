const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Inflow = mongoose.model('inflow')
const Profile = mongoose.model('profile')

module.exports = app => {
  app.post('/api/inflow', requireLogin, async (req, res) => {
    const { title, amount } = req.body
    const inflow = new Inflow({
      title,
      amount,
      _user: req.user.id
    })
    // Update the users profile net income to reflect inflow creation
    const profile = await Profile.findOne({ _user: req.user.id })
    profile.max_savings += inflow.amount
    profile.target_savings =
      profile.max_savings * (profile.percent_saved * 0.01)
    profile.monthly_spend =
      profile.target_savings * ((100 - profile.percent_saved) * 0.01)
    await profile.save()

    try {
      await inflow.save()
      res.send(inflow)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  app.get('/api/inflows', requireLogin, async (req, res) => {
    const inflows = await Inflow.find({ _user: req.user.id })
    res.send(inflows)
  })

  app.post('/api/inflow/delete', requireLogin, async (req, res) => {
    const { inflow_id } = req.body
    // take the id from the request and find the inflow object
    const inflow_obj = await Inflow.findOne({ _id: inflow_id })

    await Inflow.remove({ _id: inflow_id }, function (err) {
      if (err) {
        res.send(err)
      } else {
        res.send({ data: 'Record has been Deleted!' })
      }
    })
    // Update the profile net income to reflect the inflows destruction
    const profile = await Profile.findOne({ _user: req.user.id })
    profile.max_savings -= inflow_obj.amount
    profile.target_savings =
      profile.max_savings * (profile.percent_saved * 0.01)
    profile.monthly_spend =
      profile.target_savings * ((100 - profile.percent_saved) * 0.01)
    await profile.save()
  })
}
