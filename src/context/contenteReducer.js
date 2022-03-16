import { types } from "./types";


function contentReducer(state, action) {
    switch (action.type) {
        case types.lan:
            state = action.payload;
            return state
        default:
            return state;
    }

}

export default contentReducer;