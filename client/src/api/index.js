import axios from "axios";

let url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost)
