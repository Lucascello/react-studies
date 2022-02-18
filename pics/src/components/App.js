import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        // console.log("term on the App component: ", term);
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization:
                    "Client-ID CbLObj9qjPIOgSdJBOYtX46LmQMrfYfSeXYK3UaLHw4",
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
