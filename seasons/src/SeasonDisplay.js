import React from "react";

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? "summer" : "winter";
    } else {
        return latitude > 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth);
    // console.log("Whats the season?", season);

    // console.log("Latitude in the SeasonDisplay component:", props.latitude);
    return (
        <div>
            {season === "winter" ? "Burr, it's chilly" : "Let's hit the beach"}
        </div>
    );
};

export default SeasonDisplay;
