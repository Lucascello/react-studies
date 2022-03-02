import React, { useState } from "react";

export default function SearchBar({ onFormSubmit }) {
    const [term, setTerm] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        // TO DO: make sure we call callback from parent component
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}
