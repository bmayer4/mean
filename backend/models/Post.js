const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    message: {
        type: String,
        required: true,
        minlength: 1
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',   
        required: true,
    }
},
{ timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
