import { FETCH_ALL } from "./constants";
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