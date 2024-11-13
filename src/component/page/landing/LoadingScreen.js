import React from "react";
import { Html } from "@react-three/drei";
const LoadingImage = ({imageUrl}) => {
  return (
    <Html center>
      <img
        src={imageUrl} // Replace with your desired loading image URL
        alt="Loading..."
        style={{ width: "200px", height: "auto" }}
      />
    </Html>
  );
};

export default LoadingImage;