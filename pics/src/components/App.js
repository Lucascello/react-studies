import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        // console.log("term on the App component: ", term);
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization: "Client-ID process.env.REACT_APP_PICS_API_KEY",
            },
        });
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
