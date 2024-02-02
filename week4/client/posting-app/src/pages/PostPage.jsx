import { formatDistanceToNow } from "date-fns";
import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../utils/utils";

function PostsPage() {
  useDocumentTitle("Bloggy Posts");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/posts`
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Failed to fetch posts:", response.status);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <div className="mt-4">
        {posts.length ? (
          posts.map((post) => (
            <Card key={post.id} className="mb-3">
              <Card.Header>
                Posted{" "}
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="primary" as={Link} to={`/posts/${post.id}`}>
                  See the post
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h2>No posts found ...</h2>
        )}
      </div>
    </Container>
  );
}

export default PostsPage;
