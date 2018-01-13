const mongoose = require('mongoose')
const Profile = mongoose.model('profile')
module.exports = async (req, res, next) => {
  const profiles = await Profile.find({ _user: req.user.id })
  if (profiles.length > 0) {
    return res.status(403).send({ error: 'Profile already exists' })
  }
  next()
}
