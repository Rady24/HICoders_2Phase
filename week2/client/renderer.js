const displayPosts = (posts, postsContainer) => {
  postsContainer.innerHTML = "<h2>Posts</h2>";

  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
};

const displayUsers = (users, usersContainer) => {
  usersContainer.innerHTML = "<h2>Users</h2>";

  users.forEach((user) => {
    const userElement = createUserElement(user);
    usersContainer.appendChild(userElement);
  });
};

const createPostElement = (post) => {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <p>Created At: ${post.createdAt}</p>
      <p>Updated At: ${post.updatedAt}</p>
    `;
  return postElement;
};

const createUserElement = (user) => {
  const userElement = document.createElement("div");
  userElement.classList.add("user");
  userElement.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
    `;
  return userElement;
};

export { displayPosts, displayUsers };
