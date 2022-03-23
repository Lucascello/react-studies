import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = async () => {
//     // Bad approach!!! Doesn't work
//     const promise = await jsonPlaceholder.get("posts");

//     return {
//         type: "FETCH_POSTS",
//         payload: promise,
//     };
// };

// This is the same as the code below, but refactored

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("posts");

    dispatch({
        type: "FETCH_POSTS",
        payload: response,
    });
};

// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get("posts");

//         dispatch({
//             type: "FETCH_POSTS",
//             payload: response,
//         });
//     };
// };
