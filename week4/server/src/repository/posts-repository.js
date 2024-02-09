import Comment from "../models/comment.js";
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

const getPostWithComments = async (postId) => {
  return await Post.findByPk(postId, {
    include: [
      {
        model: Comment,
        as: "Comments",
      },
    ],
  });
};

export { getPosts, getPostById, createPost, getPostWithComments };
