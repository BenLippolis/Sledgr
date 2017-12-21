const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Inflow = mongoose.model('inflow');

module.exports = app => {
    app.post('/api/inflow', requireLogin, async (req, res) => {
        const { title, amount } = req.body;
        const inflow = new Inflow({
            title, 
            amount,
            _user: req.user.id 
        });
        try {
            await inflow.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/inflows', requireLogin, async (req, res) => {
        const inflows = await Inflow.find({ _user: req.user.id });
        res.send(inflows);
    });
};