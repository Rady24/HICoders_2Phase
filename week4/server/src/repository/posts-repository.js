import Post from "../models/post.js";

const getPosts = async () => {
  return await Post.findAll();
};

const getPostById = async (id) => {
  return await Post.findByPk(id);
};

const createPost = async (postDetails) => {
  return await Post.create(postDetails);
};

export { getPosts, getPostById, createPost };
