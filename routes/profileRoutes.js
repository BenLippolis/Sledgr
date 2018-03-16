const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Profile = mongoose.model('profile')
const oneProfile = require('../middlewares/oneProfile')

module.exports = app => {
  // Create profile
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

  // Fetch profile
  app.get('/api/profile', requireLogin, async (req, res) => {
    const profile = await Profile.findOne({ _user: req.user.id })
    res.send(profile)
  })

  // Update profile
  app.patch('/api/profile/update', requireLogin, async (req, res) => {
    try {
      const profile = await Profile.findOneAndUpdate(
        { _user: req.user.id },
        req.body,
        { new: true }
      )
      await profile.save()
      res.send(profile)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  // Create an expense
  app.patch('/api/profile/expense', requireLogin, async (req, res) => {
    const { title, amount } = req.body
    const newExpense = { title: title, amount: amount }
    try {
      const profile = await Profile.findOne({ _user: req.user.id })
      profile.expenses.push(newExpense)

      await profile.save()
      res.send(profile)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  // Update an expense
  app.patch('/api/profile/expense/update', requireLogin, async (req, res) => {
    const { expense_id, title, amount } = req.body
    try {
      await Profile.findOneAndUpdate(
        { _user: req.user.id, 'expenses._id': expense_id },
        {
          $set: {
            'expenses.$.title': title,
            'expenses.$.amount': amount
          }
        }
      )
    } catch (err) {
      res.status(422).send(err)
    }
  })

  // Destroy an expense
  app.patch('/api/profile/expense/delete', requireLogin, async (req, res) => {
    const { expense } = req.body
    try {
      const profile = await Profile.findOne({ _user: req.user.id })
      profile.expenses.pull(expense._id)

      await profile.save()
      res.send(profile)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
