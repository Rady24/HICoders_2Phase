import React from "react";
import { formatDistanceToNow } from "date-fns";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.content}</p>
      <span className="comment-date">
        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
      </span>
    </div>
  );
};

export default Comment;
