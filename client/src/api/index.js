import axios from "axios";

let url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (postId, post) => {
    console.log("updatePost -> , ", postId);
    return axios.patch(`${url}/${postId}`, post)
}

export const deletePost = (postId) => axios.delete(`${url}/${postId}`);