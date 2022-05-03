import { FETCH_ALL, CREATE_POST } from "./constants";
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