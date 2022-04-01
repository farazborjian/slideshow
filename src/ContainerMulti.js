import React from "react";

const ContainerMulti = ({ images, rowHeight = 100 }) => {
  return (
    <div className="containerMulti">
      {/* image need a source url which we get from list of images at current index. This has been set in the app.js */}
      {/* we also need a style to show it in the contained boundary. objectFit define how to handle scaling for images bigger than containerMulti size */}
      {images.map((image, index) => (
        <img
          src={image}
          alt="slider item"
          key={index}
          srcset=""
          style={{
            width: "100%",
            height: `${rowHeight}px`,
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};

export default ContainerMulti;
