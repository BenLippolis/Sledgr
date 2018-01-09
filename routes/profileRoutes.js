const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Profile = mongoose.model('profile');
const oneProfile = require('../middlewares/oneProfile');

module.exports = app => {
    app.post('/api/profile', requireLogin, oneProfile, async (req, res) => {
        const { name, birthday } = req.body;
        const max_savings = 0;
        const show_max_savings = true;
        const target_savings = 0;
        const monthly_spend = 0;
        const reward_schedule = 0;

        const profile = new Profile({
            name, 
            birthday,
            max_savings,
            show_max_savings,
            target_savings,
            monthly_spend,
            reward_schedule,
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
        const profile = await Profile.findOne({ _user: req.user.id });
        const { show_max_savings } = req.body;
        const { reward_schedule } = req.body;
        if (show_max_savings != undefined) {
            profile.show_max_savings = show_max_savings; 
        } else if (reward_schedule != undefined) {
            profile.reward_schedule = reward_schedule; 
        }
        
        try {
            await profile.save();
            res.send(profile);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};