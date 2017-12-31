const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Profile = mongoose.model('profile');
const oneProfile = require('../middlewares/oneProfile');

module.exports = app => {
    app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
        const { name, birthday } = req.body;
        const net_income = 0;
        const show_net_income = true;
        const profile = new Profile({
            name, 
            birthday,
            net_income,
            show_net_income,
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
        const profile = await Profile.findOne({ _user: req.user.id });
        res.send(profile);
    });

    app.patch('/api/profile/update', requireLogin, async (req, res) => {
        const { show_net_income } = req.body;
        const profile = await Profile.findOne({ _user: req.user.id });
        profile.show_net_income = show_net_income;       
        try {
            await profile.save();
            res.send(profile);
        } catch (err) {
            res.status(422).send(err);
        }
    });

};