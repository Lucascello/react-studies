import React from "react";

const DropDown = () => {
    return (
        <select name="select" multiple="" class="ui fluid dropdown">
            <option value="">Select One</option>
            <option value="all">✅ ✅ Thursday & Sunday</option>
            <option value="sunday">❌ ✅ Only Sunday</option>
            <option value="none">👎 Not Available</option>
            <option value="design">🤷🏻‍♂️ 🤷🏻‍♀️ Don't Know Yet</option>
        </select>
    );
};

export default DropDown;
