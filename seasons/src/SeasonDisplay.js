import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun",
    },
    winter: {
        text: "Burr, it's cold",
        iconName: "snowflake",
    },
};

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
    // const text =
    //     season === "winter" ? "Burr, it's chilly" : "Let's hit the beach";
    // const iconName = season === "winter" ? "snowflake" : "sun";

    // Better version of the ternary operators
    const { text, iconName } = seasonConfig[season];

    // console.log("Latitude in the SeasonDisplay component:", props.latitude);
    return (
        <div className={`season-display ${season}`}>
            {/* <h1>
                {season === "winter"
                    ? "Burr, it's chilly"
                    : "Let's hit the beach"}
            </h1> */}
            {/* better way of writting h1 the code above */}
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;

{
    /* <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>; */
}
