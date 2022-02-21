import React from "react";

export default class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        // TO DO: make sure we call callback from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            valeu={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
