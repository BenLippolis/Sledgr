const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Outflow = mongoose.model('outflow');

module.exports = app => {
    app.post('/api/outflow', requireLogin, async (req, res) => {
        const { title, amount } = req.body;
        const outflow = new Outflow({
            title, 
            amount,
            _user: req.user.id 
        });
        try {
            await outflow.save();
            res.send(req.user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/outflows', requireLogin, async (req, res) => {
        const outflows = await Outflow.find({ _user: req.user.id });
        res.send(outflows);
    });
};