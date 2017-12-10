const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, async (req, res) => {
        const { title, subject, body } = req.body;
        const survey = new Survey({
            title, 
            subject, 
            body,
            _user: req.user.id,
            dateSent: Date.now()
        });
        try {
            await survey.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id });
        res.send(surveys);
    });
};