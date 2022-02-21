import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    // console.log("image props from App: ", props.images);
    // const images = props.images.map((image) => {
    //     return <img alt={image.description} key={image.id} src={image.urls.regular} />;
    // });

    // This looks better than the code above, as I destructure the images object
    // const images = props.images.map(({ description, id, urls }) => {
    //     return <img alt={description} key={id} src={urls.regular} />;
    // });

    // Now doing the above version, passing a component to it
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;
