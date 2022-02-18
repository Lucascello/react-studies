import React from "react";

export default class SearchBar extends React.Component {
    state = { term: "" };
    // onInputChange(e) {
    //     console.log(e.target.value);
    // }

    onFormSubmit(e) {
        e.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={(e) => this.onFormSubmit(e)}
                    className="ui form"
                >
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input
                            type="text"
                            onChange={(e) => console.log(e.target.value)}
                        /> */}
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
