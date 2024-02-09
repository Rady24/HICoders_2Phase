import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { formatDistanceToNow } from "date-fns";
import Comment from "../components/Comment";

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/posts/${postId}`
        );
        const postData = postResponse.ok ? await postResponse.json() : null;
        setPost(postData);

        const commentsResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/posts/${postId}/comments`
        );
        const commentsData = commentsResponse.ok
          ? await commentsResponse.json()
          : [];
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  if (!post) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Card className="mt-4">
        <Card.Header>
          Published{" "}
          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        </Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <h5>Comments:</h5>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : (
          <Card>
            <Card.Body>No comments yet.</Card.Body>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default PostDetail;
