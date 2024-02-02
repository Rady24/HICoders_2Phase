import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../utils/utils";

function HomePage() {
  useDocumentTitle("Bloggy App");

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1>Bloggy</h1>
          <p className="lead">Where words come to life</p>
          <div className="d-grid gap-1">
            <Button
              variant="danger"
              size="lg"
              className="mb-2"
              as={Link}
              to="/create"
            >
              Create
            </Button>
            <Button variant="danger" size="lg" as={Link} to="/posts">
              View Posts
            </Button>
          </div>
          <blockquote className="blockquote bg-light p-4 mt-4">
            <p className="mb-0">
              Bloggy is the ultimate blogging platform for anyone looking to
              express themselves in the digital world. Whether you're a seasoned
              writer or a novice blogger, Bloggy has everything you need to
              create and publish your content. With its intuitive interface and
              easy-to-use tools, Bloggy makes it simple to write, edit, and
              format your blog posts. Plus, with a wide range of customizable
              templates and themes, you can make your blog truly your own. So
              why wait? Sign up for Bloggy today and start sharing your
              thoughts, ideas, and experiences with the world!
            </p>
            <footer className="blockquote-footer mt-3">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
