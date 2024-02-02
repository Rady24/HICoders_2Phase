async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const posts = await fetchData("http://localhost:4000/api/posts");
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function getUsers() {
  try {
    const users = await fetchData("http://localhost:4000/api/users");
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
