import axios from "axios";

let url = "http://localhost:8000/posts";

const fetchPosts = () => axios.get(url);

export { fetchPosts };