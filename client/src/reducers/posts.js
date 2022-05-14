import { FETCH_ALL, FETCH_POST, CREATE_POST, DELETE_POST, UPDATE_POST } from "../actions/constants"

const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_POST:
            return state;
        case CREATE_POST:
            return [...state, action.payload];
        case UPDATE_POST:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE_POST:
            const postId = action.payload.postId;
            return state.filter((post) => post._id != postId)
        default:
            return state;
    }
}

export default postReducer;