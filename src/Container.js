import React from "react";

const Container = ({ image }) => {
  return (
    <div className="container">
      {/* image need a source url which we get from list of images at current index. This has been set in the app.js */}
      {/* we also need a style to show it in the contained boundary. objectFit define how to handle scaling for images bigger than container size */}
      <img
        src={image}
        alt="slider item"
        srcset=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Container;
