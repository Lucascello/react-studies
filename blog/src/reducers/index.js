import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    //Just a dummy reducer below to stop the error message on the console, until I know which reducers I need
    // replaceMe: () => "hi there",

    posts: postsReducer,
    users: usersReducer,
});
