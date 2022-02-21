import React from "react";
import Unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        // console.log("term on the App component: ", term);
        const response = await Unsplash.get("/search/photos", {
            params: { query: term },
        });
        // console.log("response from Unsplash", response.data.results);
        this.setState({ images: response.data.results });

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
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmitForm={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
