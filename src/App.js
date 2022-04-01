import React, { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";
import axios from "axios";
import "./App.css";
import ContainerMulti from "./ContainerMulti";

const localImages = [
  "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
  "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NDU1Mjc3fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png",
  "https://post.healthline.com/wp-content/uploads/2020/08/edible-flowers-732x549-thumbnail.jpg",
  "https://www.lovingly.com/wp-content/uploads/2019/09/red-rose-on-black-background-649x1024.jpg",
];

function App() {
  // const [image, setImage] = useState(images[0]);
  // use this line instead of the above line to get a random image
  const [images, setImages] = useState(localImages);
  const [index, setIndex] = useState(0);
  // define how many you want to show in the container
  const [increment, setIncrement] = useState(3);

  const getImages = async (array) => {
    // get list of random images from an API endpoint
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      if (response.status === 200) {
        // console.log("response", response); // uncomment to see the response
        // since we only need url, we can use map to get the url of each image
        const randomImages = response.data.map((image) => image.download_url);
        setImages(randomImages);
      }
    } catch (error) {}
  };

  useEffect(() => {
    // get images from api on component mount
    getImages(); // comment out to only use local images
    return () => {
      // cleanup
    };
  }, []);

  const handlePrevious = () => {
    setIndex((index) => {
      // if current index is 0, set the next to last image (create a loop)
      if (index < 1) {
        return images.length - increment;
      }
      return index - increment;
    });
  };

  const handleNext = () => {
    setIndex((index) => {
      // if current index is the last image, set the next to first image (create a loop)
      if (index > images.length - 1) {
        return 0;
      }
      return index + increment;
    });
  };

  return (
    <>
      {/* <Container image={images[index]} /> */}
      <ContainerMulti
        images={images.slice(index, index + increment)}
        rowHeight={200}
      />
      <Button onClick1={handlePrevious} onClick2={handleNext} />
    </>
  );
}
export default App;
