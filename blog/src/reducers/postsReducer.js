export default (state = [], action) => {
    // if (action.type === "FETCH_POSTS") {
    //     return action.payload;
    // }
    // return state;

    // code below is more common

    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        default:
            return state;
    }
};
