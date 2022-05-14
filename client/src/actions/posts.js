import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from "./constants";
import * as api from "../api";


//action creators 
export const getPosts = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.fetchPosts();
            const action = {
                type: FETCH_ALL,
                payload: data
            };
            dispatch(action);
        } catch (error) {
            console.log("Error while fetching posts", error);
        }
    }
}

export const createPost = (newPost) => async (dispatch) => {
    console.log("inside create post ", newPost);
    try {
        const { data } = await api.createPost(newPost);
        const action = {
            type: CREATE_POST,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log("Error while creating a post ", error);
    }
}

export const updatePost = (postId, post) => async (dispatch) => {
    console.log("inside update post ", postId);
    try {
        const { data } = await api.updatePost(postId, post);
        const action = {
            type: UPDATE_POST,
            payload: data
        }
        dispatch(action);
    } catch (err) {
        console.log("Failed while updating post", err.message);
    }
}

export const deletePost = (postId) => async (dispatch) => {
    console.log("deleting a post with id ", postId);
    try {
        const deletePostResponse = await api.deletePost(postId);
        const action = {
            type: DELETE_POST,
            payload: { postId }
        }
        dispatch(action);
    } catch (err) {
        console.log("Error while deleting given post ", err);
    }

}

export const likePost = (postId) => async (dispatch) => {
    console.log("Updating like count for post with ID ", postId);
    try {
        const { data } = await api.likePost(postId);
        const action = {
            type: LIKE_POST,
            payload: data
        }
        dispatch(action);
    } catch (err) {
        console.log("Failed to like the post!");
    }
}