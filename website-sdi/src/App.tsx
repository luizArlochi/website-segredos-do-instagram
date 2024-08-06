import React from 'react';
import Header from './components/Header';
import Feedback from './components/Feedback';
import Trail from './components/Trail';
import GiftBox from './components/GiftBox';
import './App.css';
import Video from './components/Video';

function App() {

  return (
    <div>
      <div className="header-background">
        <Header />
      </div>
      <Video />
      <Feedback />
      {/* <Trail /> */}
      {/* <GiftBox /> */}
    </div>
  )
}

export default App
