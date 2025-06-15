const Post = require('../models/Post');

exports.getAll = async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
};

exports.create = async (req, res) => {
  const newPost = new Post({ ...req.body, author: req.user.id });
  await newPost.save();
  res.status(201).json(newPost);
};

exports.delete = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post eliminado' });
};
