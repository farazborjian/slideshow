import React, { useState, useEffect } from 'react';
import Container from './Container';
import Button from './Button';
import axios from 'axios';
import './App.css';

const images = ['https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg', 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NDU1Mjc3fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers.jpg', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png', 'https://post.healthline.com/wp-content/uploads/2020/08/edible-flowers-732x549-thumbnail.jpg', 'https://www.lovingly.com/wp-content/uploads/2019/09/red-rose-on-black-background-649x1024.jpg']

function App() {
  const [image, setImage] = useState(images[0])

  const getImage = array => {
    return array[0]
  }

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get(getImage)
      setImage(response)
    }
    callApi()
  }, [])

  const handlePrevious = () => {
    setImage(image - 1)
  }

  const handleNext = () => {
    setImage(image + 1)
  }
  return (
    <>
    <Container image={image}/>
    <Button onClick1={handlePrevious} onClick2={handleNext}/>
    </>
  );

  } 
export default App;
