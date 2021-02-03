import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //   console.log(props.images);

  //   const images = props.images.map((img) => {
  //     return <img key={img.id} src={img.urls.regular} alt={img.description} />;
  //   });

  const images = props.images.map((img) => {
    return <ImageCard key={img.id} image={img} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
