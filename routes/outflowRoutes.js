const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Outflow = mongoose.model('outflow');
const Profile = mongoose.model('profile');

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
            res.send(outflow);
        } catch (err) {
            res.status(422).send(err);
        }
        // Update the users profile net income to reflect outflow creation
        const profile = await Profile.findOne({_user: req.user.id});
        profile.net_income -= outflow.amount;
        await profile.save();
    });

    app.get('/api/outflows', requireLogin, async (req, res) => {
        const outflows = await Outflow.find({ _user: req.user.id });
        res.send(outflows);
    });

    app.post('/api/outflow/delete', requireLogin, async (req, res) => {
        const { outflow_id } = req.body;   
        // take the id from the request and find the outflow object
        const outflow_obj = await Outflow.findOne({_id: outflow_id});

        await Outflow.remove({ _id: outflow_id }, function(err) {  
                   if(err) {  
                       res.send(err);  
                   }  
                   else {    
                        res.send({data:"Record has been Deleted!"});             
                    }  
        }); 
        // Update the users profile net income to reflect the outflows destruction
        const profile = await Profile.findOne({_user: req.user.id});
        profile.net_income += outflow_obj.amount;
        await profile.save();
    });
};