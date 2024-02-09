import Comment from "../models/comment.js";

const getComments = async () => {
  return await Comment.findAll();
};

const getCommentById = async (id) => {
  return await Comment.findByPk(id);
};

const createComment = async (CommentDetails) => {
  return await Comment.create(CommentDetails);
};

export { getComments, getCommentById, createComment };
