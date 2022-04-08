import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// When we call an action creator from inside an action creator, we need to make sure to dispatch the result from calling an action creator

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, "userId"));

    userIds.forEach((id) => dispatch(fetchUser(id)));
};

// export const fetchPosts = async () => {
//     // Bad approach!!! Doesn't work
//     const promise = await jsonPlaceholder.get("posts");

//     return {
//         type: "FETCH_POSTS",
//         payload: promise,
//     };
// };

// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get("posts");

//         dispatch({
//             type: "FETCH_POSTS",
//             payload: response,
//         });
//     };
// };

// This is the same as the code above, but refactored

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
        type: "FETCH_POSTS",
        payload: response.data,
    });
};

// The function below fetches the user multiple times, even if it already fetched the user previously. To avoid all these extra API requests, we are using the _.memoize() method from lodash. So now the function below will be re-writen...

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: "FETCH_USER",
        payload: response.data,
    });
};

/////////////////////////////////////////////////////////////////////////////////////////

// Code below can be refactored too...

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };

//Maybe not the best solution, since if the User from the API changes, you can not request the data again. But is definitely one solution

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data,
//     });
// });

////////////////////////////////////////////////////////////////////////////////////////
