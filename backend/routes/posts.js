const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authenticate = require('../middleware/auth');

router.get('/posts/user/:userid', (req, res) => { 
    Post.find({ author: req.params.userid }).then(posts => res.send(posts))
    .catch(err => res.status(400).json(err));    
});

router.get('/posts/:id', (req, res) => { 
    Post.findOne({ _id: req.params.id }).then(post => res.send(post))
    .catch(err => res.status(400).json(err));    
});

router.post('/posts', authenticate, (req, res) => {
    const { message } = req.body;
    const author = req.userData.userId;
    new Post({ message, author }).save().then(post => res.send(post))
    .catch(err => res.status(400).json(err));
});

router.patch('/posts/:id', authenticate, async (req, res) => {
    const id = req.params.id;
    const { message } = req.body;
    try {
        let post = await Post.findOneAndUpdate({ _id: id, author: req.userData.userId }, { $set: { message }}, { new: true, runValidators: true });
        if (!post) { return res.status(400).json({ message: 'Post not found'}); }  //will work if no post if found (valid format)
        res.send(post);
    } catch (err) {
        return res.status(404).json({ message: 'Unable to update post'});  //will work if invalid post id, or validators fail
    }
});

router.delete('/posts/:id', authenticate, async (req, res) => {
    const id = req.params.id;
    try {
        let post = await Post.findOneAndDelete({ _id: id, author: req.userData.userId });
        if (!post) { return res.status(400).json({ message: 'Post not found'}); }  //will work if no post if found (valid format)
        res.json({ message: 'Post deleted'});
    } catch (err) {
        return res.status(404).json({ message: 'Unable to delete post'});  //will work if invalid post id, or validators fail
    }
});

module.exports = router;