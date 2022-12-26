import axios from "axios";

const instance = axios.create();
let users = [];
let userPost = [];

const getUsers = async () => {
  if (users.length) {
    return users;
  } else {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    users = response.data;
    return users;
  }
};

const getUserPosts = async (userId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/` + userId + `/comments`
  );
  userPost = response.data;
  return userPost;
};

export default { getUsers, getUserPosts };
