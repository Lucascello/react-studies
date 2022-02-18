import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        console.log("term on the App component: ", term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmitForm={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
