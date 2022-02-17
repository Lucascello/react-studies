import React from "react";

const Loader = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>
    );
};

{
    /* <div class="ui big text loader">{props.message || "Loading..."}</div>
Loader { */
}
// Better way to the code above
Loader.defaultProps = {
    message: "Loading...",
};

export default Loader;
