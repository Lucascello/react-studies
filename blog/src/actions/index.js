import jsonPlaceholder from "../apis/jsonPlaceholder";

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

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: "FETCH_USER",
        payload: response.data,
    });
};
