import React from "react";
import Songlist from "./songList";

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <Songlist />
                </div>
            </div>
        </div>
    );
};

export default App;
