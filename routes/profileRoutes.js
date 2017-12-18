const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Profile = mongoose.model('profile');
const oneProfile = require('../middlewares/oneProfile');

module.exports = app => {
    app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
        console.log('boo');
        const { name, birthday } = req.body;
        const profile = new Profile({
            name, 
            birthday,
            _user: req.user.id 
        });
        try {
            await profile.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/profile', requireLogin, async (req, res) => {
        const profiles = await Profile.find({ _user: req.user.id });
        res.send(profiles);
    });
};