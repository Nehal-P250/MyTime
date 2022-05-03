import { FETCH_ALL, FETCH_POST, CREATE_POST, DELETE_POST } from "../actions/constants"

const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_POST:
            return state;
        case CREATE_POST:
            return [...state, action.payload];
        case DELETE_POST:
            return state;
        default:
            return state;
    }
}

export default postReducer;