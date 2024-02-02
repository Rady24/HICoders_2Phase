import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { formatDistanceToNow } from "date-fns";
import { useDocumentTitle } from "../utils/utils";

function PostDetail() {
  useDocumentTitle("Bloggy Post Details");

  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/posts/${postId}`
        );
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.error("Failed to fetch post:", response.status);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="mt-4">
        <Card>
          <Card.Header>
            Published{" "}
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default PostDetail;
