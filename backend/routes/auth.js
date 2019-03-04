const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {

    const { email, password, name, description } = req.body;
    User.findOne({ email }).then(user => {  
        
        if (user) {   
            return res.status(400).json({ message: 'Unable to register'}); 
        } 

        new User({ email, password, name, description })
        .save().then(user => res.json({ message: 'User created'}))
        .catch(err => res.status(400).json(err.message));
    }).catch(err => res.status(400).json(err.message));;

});

router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        var user = await User.findOne({ email });

        if (!user) {   
            return res.status(400).json({ message: 'Unable to login'}); 
        } 

        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
                return res.status(404).json({ message: 'Auth failed' });
            }
            const token = jwt.sign({ userId: user._id }, 'topsecret', { expiresIn: "4h" });
            const userToReturn = { _id: user._id, email: user.email, name: user.name, createdAt: user.createdAt }
            res.json({ user: userToReturn, token });  //could send user back if we needed to
        });

      } catch (err) {
        res.status(400).send(err);
      }
});

module.exports = router;