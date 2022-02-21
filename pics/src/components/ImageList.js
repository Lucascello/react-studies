import React from "react";

const ImageList = (props) => {
    // console.log("image props from App: ", props.images);
    const images = props.images.map((image) => {
        return <img src={image.urls.regular} />;
    });

    return <div>{images}</div>;
};

export default ImageList;
