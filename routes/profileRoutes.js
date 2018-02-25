const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Profile = mongoose.model('profile')
const oneProfile = require('../middlewares/oneProfile')

module.exports = app => {
  app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
    const { name, birthday } = req.body

    const profile = new Profile({
      name,
      birthday,
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
