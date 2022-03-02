import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        videoSearch(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const videoSearch = async (term) => {
        // console.log("Term from the SearchBar component: ", term);
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
    };

    // This code is a React convention
    return [videos, videoSearch];
    // The code below is more used among the JS community
    // return { videos, videoSearch };
};

export default useVideos;
