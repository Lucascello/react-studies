import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
    auth: authReducer,
    streams: streamReducer,
});
