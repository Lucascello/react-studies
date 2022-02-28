import React, { useState, useEffect } from "react";
import Translate from "./Translate";

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log("New language or text");
    }, [language, text]);

    return <div>Convert</div>;
};

export default Convert;
