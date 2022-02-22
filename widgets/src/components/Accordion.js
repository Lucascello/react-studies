import React from "react";

export default ({ items }) => {
    return <h1>{items.length}</h1>;
};

// code above is the same as
// export default function Accordion() {
//     return <h1>Accordion</h1>;
// };

// or
// const Accordion = () => {
//     return <h1>Accordion</h1>;
// };
// export default Accordion;
