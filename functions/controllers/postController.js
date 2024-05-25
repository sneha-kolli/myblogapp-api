const PostModel = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
      if (!req.body.title || !req.body.content) {
        return res.status(400).send({ message: "Content can not be empty!" });
      }
  
      const post = new PostModel({
        title: req.body.title,
        content: req.body.content
      });
  
      const savedPost = await post.save();
      res.status(201).send({ message: "Post created successfully!!", post: savedPost });
    } catch (error) {
      res.status(500).send({ message: error.message || "Some error occurred while creating post" });
    }
  };
  
  exports.findAllPosts = async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  exports.findPostById = async (req, res) => {
    try {
      const post = await PostModel.findById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  exports.updatePost = async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" });
      }
  
      const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false });
      if (!updatedPost) {
        return res.status(404).send({ message: "Post not found." });
      }
  
      res.send({ message: "Post updated successfully." });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  
  exports.deletePost = async (req, res) => {
    try {
      const deletedPost = await PostModel.findOneAndDelete({ _id: req.params.id });
      if (!deletedPost) {
        return res.status(404).send({ message: "Post not found." });
      }
  
      res.send({ message: "Post deleted successfully!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };