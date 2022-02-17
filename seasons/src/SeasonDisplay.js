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
    const text =
        season === "winter" ? "Burr, it's chilly" : "Let's hit the beach";
    const icon = season === "winter" ? "snowflake" : "sun";

    // console.log("Latitude in the SeasonDisplay component:", props.latitude);
    return (
        <div>
            {/* <h1>
                {season === "winter"
                    ? "Burr, it's chilly"
                    : "Let's hit the beach"}
            </h1> */}
            {/* better way of writting h1 the code above */}
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
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
