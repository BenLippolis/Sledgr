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

    app.post('/api/outflow/delete', requireLogin, async (req, res) => {
        const { outflow } = req.body;   
        console.log('DELETE THIS INFLOWwwwww' + outflow)
        await Outflow.remove({ _id: outflow }, function(err) {  
                   if(err){  
                       res.send(err);  
                   }  
                   else{    
                          res.send({data:"Record has been Deleted!"});             
                      }  
               });  
       }) ;
};