import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Header from './components/Header';
import Images from './components/Images';
import images from './components/assets/imagesData';
function App() {
  return (
    <div >
      <Nav />
      <Header />
      <Images images={images} />
    </div >
  )
}

export default App;
