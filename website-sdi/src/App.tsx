import React from 'react';
import Header from './components/Header';
import Feedback from './components/Feedback';
import Trail from './components/Trail';
import Carousel from './components/Carousel';
import Video from './components/Video';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="">
      <div className="header-background">
        <Header />
      </div>
      <Video />
      <Feedback />
      <Trail />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
