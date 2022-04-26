import React from "react";
import Label from "./Label";
import { Child, Parent } from "./Bla";

function App() {
    return (
        <>
            <Label value={"Hello World!"} color={"blue"} />
            <Child />
            <Parent />
        </>
    );
}

export default App;
