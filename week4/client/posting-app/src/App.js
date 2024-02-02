import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CreatePost from "./pages/CreatePost";
import PostsPage from "./pages/PostPage";
import PostDetail from "./pages/PostDetail";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
