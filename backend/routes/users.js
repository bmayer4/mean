const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/users', async (req, res) => {
    try {
    // var users = await User.find({}, '_id email password createdAt updatedAt');
    var users = await User.find({}, '-password -__v');
    res.send(users);  //nothing wrong with there being no users, returns empty array
    } catch (err) {
        res.status(400).send(err);
    }  
});

router.get('/profile/:id', async (req, res) => {
    let id = req.params.id;
    try {
    var user = await User.findById(id, '-password -__v');
    if (!user) { return res.status(404).json({ message: 'User not found'}); }
    res.send(user);
    } catch (err) {
        return res.status(404).json({ message: 'Invalid User Id'});   //if I put in 4, may just want to say user not found
    }  
});

module.exports = router;