import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log("position :)", position),
        (err) => console.log(err)
    );
    return <div>Hi There!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
