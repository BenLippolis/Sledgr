const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Reward = mongoose.model('reward')

module.exports = app => {
  // Create reward
  app.post('/api/reward', requireLogin, async (req, res) => {
    const { category1, category2, category3, description } = req.body
    const reward = new Reward({
      category1,
      category2,
      category3,
      description,
      _user: req.user.id
    })
    try {
      await reward.save()
      res.send(reward)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
