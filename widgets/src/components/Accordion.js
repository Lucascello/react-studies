import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        // console.log("Title in accordion got clicked: ", index);
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div
                    className="title active"
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems} <h1>{activeIndex}</h1>
        </div>
    );
};

// code above is the same as
// export default function Accordion() {
//     return <h1>Accordion</h1>;
// };

// or
// export default() => {
//     return <h1>Accordion</h1>;
// };

export default Accordion;
