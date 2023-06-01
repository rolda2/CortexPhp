import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Academy from './components/Academy';
import Navbar from './components/Navbar';
import Ziskam from './components/Ziskam';
import World from './components/World';
import Timeline from './components/Timeline';
import Price from './components/Price';
import Dates from './components/Dates';
import Signup from './components/SIgnup';
import Footer from './components/Footer';
import Line from './components/Line';
import Map from './components/Map';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
      <Welcome />
      <Navbar />
      <Academy />
      <Ziskam />
      <World />
      <Timeline />
      <Price />
      <Dates />
      <Signup />
      <Map />
      <Footer />
      <Line />
    </>
  );
}

export default App;
