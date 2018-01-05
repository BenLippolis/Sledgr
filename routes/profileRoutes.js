const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Profile = mongoose.model('profile');
const oneProfile = require('../middlewares/oneProfile');

module.exports = app => {
    app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
        const { name, birthday } = req.body;
        const max_savings = 0;
        const target_savings = 0;
        const monthly_spend = 0;
        const show_max_savings = true;
        const profile = new Profile({
            name, 
            birthday,
            max_savings,
            show_max_savings,
            target_savings,
            monthly_spend,
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
        const { show_max_savings } = req.body;
        const profile = await Profile.findOne({ _user: req.user.id });
        profile.show_max_savings = show_max_savings;       
        try {
            await profile.save();
            res.send(profile);
        } catch (err) {
            res.status(422).send(err);
        }
    });

};