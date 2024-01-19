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
  postElement.classList.add("col-md-6", "col-lg-4", "mb-4");

  postElement.innerHTML = `
    <div class="card h-100 shadow-sm"> <!-- Shadow and height for better card appearance -->
      <div class="card-header bg-primary text-white">${
        post.title
      }</div> <!-- Adding a color to the header -->
      <div class="card-body">
        <h5 class="card-title">${new Date(
          post.createdAt
        ).toLocaleString()}</h5> <!-- Formatting date -->
        <p class="card-text">${post.content}</p>
      </div>
      <div class="card-footer bg-light text-muted">
        <small>Last updated: ${new Date(
          post.updatedAt
        ).toLocaleString()}</small> <!-- Formatting date -->
      </div>
    </div>
  `;
  return postElement;
};

const createUserElement = (user) => {
  const userElement = document.createElement("div");
  userElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "bg-light",
    "border-0",
    "shadow-sm"
  );

  const userInfoDiv = document.createElement("div");
  userInfoDiv.innerHTML = `<h5 class="mb-1 fw-bold text-primary">${user.name}</h5>`;

  const selectButton = document.createElement("button");
  selectButton.classList.add("btn", "btn-success", "btn-sm");
  selectButton.textContent = "Select";
  selectButton.type = "button";

  selectButton.addEventListener("click", function () {
    const emailDisplay = document.getElementById(`email-${user.email}`);
    emailDisplay.classList.toggle("d-none");
  });

  userElement.appendChild(userInfoDiv);
  userElement.appendChild(selectButton);

  const emailElement = document.createElement("p");
  emailElement.classList.add("mb-1", "d-none", "text-muted");
  emailElement.id = `email-${user.email}`;
  emailElement.textContent = `Email: ${user.email}`;

  userElement.appendChild(emailElement);

  return userElement;
};

export { displayPosts, displayUsers };
