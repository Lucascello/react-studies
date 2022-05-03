import React from "react";
import Header from "./Header";
import Body from "./Body";
import Inactive from "./Inactive";

const App = () => {
    return (
        <>
            <div className="title">
                <h1 className="pt">Praise Team Sunday Service Participation</h1>
            </div>
            <table>
                <Header />
                <Body />
            </table>
            <br />
            <Inactive />
        </>
    );
};

export default App;
