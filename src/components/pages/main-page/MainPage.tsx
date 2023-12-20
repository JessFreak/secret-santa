import React from 'react';
import ChristmasTime from './ChristmasTime/ChristmasTime';
import Party from './Party/Party';
import GiftItems from './GiftItems/GiftItems';
import About from './About/About';
import Join from './Join/Join';

const MainPage = () => {
  return (
    <>
      <ChristmasTime />
      <Party />
      <GiftItems />
      <About />
      <Join />
    </>
  );
};

export default MainPage;