import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        // console.log("term on the App component: ", term);
        const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                params: { query: term },
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_PICS_API_KEY}`,
                },
            }
        );
        console.log("response from unsplash", response.data.results);

        // axios
        //     .get("https://api.unsplash.com/search/photos", {
        //         params: { query: term },
        //         headers: {
        //             Authorization: `Client-ID ${process.env.REACT_APP_PICS_API_KEY}`,
        //         },
        //     })
        //     .then((response) => {
        //         console.log("response from unsplash", response.data.results);
        //     });
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
