import { FETCH_POSTS, CREATE_POST, DELETE_POST } from "../actions/constants"

const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return state;
        case CREATE_POST:
            return state;
        case DELETE_POST:
            return state;
        default:
            return state;
    }
}

export default postReducer;