const router = require('express').Router()  ;
const Comment = require ('../model/Comment');
//const { restart } = require('nodemon');

//get all comments 
router.post('/getall',async (req,res) => {

    try {
        const all = await Comment.find() ;
        res.send (all);
        console.log('getall'  );
    } catch (error) {
        res.status(400).send(err);
    }
}); 

//add comments 
router.post('/add',async (req,res) => {


    const comm  = new Comment ({
        text :req.body.text,
        author: req.body.author,
        parent : req.body.parent     
    });
    try {
        console.log('trying'  );
        const savedUser = await comm.save() ;
        const all = await Comment.find() ;
        res.send (all);
    } catch (error) {
        res.status(400).send(err);
    }
}); 


//update comments
router.post('/update',async (req,res) => {
    const query = {_id : req.body._id};
    
    try {
        let a = await Comment.updateOne(query,{text: req.body.text});
        const all = await Comment.find() ;
        res.send (all);
    } catch (error) {
        res.status(400).send(err);
    }
}); 


module.exports = router;