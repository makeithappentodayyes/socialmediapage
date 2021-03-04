const Post = require('../models/post')

exports.getPosts = (req, res) => {
    const post = Post.find().select("id title body")
    .then(posts => {
        res.json({ posts });
    })
    .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
        res.json({
            post: result
        });
    });
}









