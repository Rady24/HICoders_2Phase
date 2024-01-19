import { displayPosts, displayUsers } from "./renderer.js";
import { getPosts, getUsers } from "./model.js";

document.addEventListener("DOMContentLoaded", async () => {
  const postsContainer = document.getElementById("posts-container");
  const usersContainer = document.getElementById("users-container");

  try {
    const posts = await getPosts();
    const users = await getUsers();

    displayPosts(posts, postsContainer);
    displayUsers(users, usersContainer);
  } catch (error) {
    console.error("Error:", error);
  }
});
