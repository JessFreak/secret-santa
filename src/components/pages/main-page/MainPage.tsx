import React from 'react';
import ChristmasTime from './ChristmasTime/ChristmasTime';
import Party from './Party/Party';
import GiftItems from './GiftItems/GiftItems';
import About from './About/About';

const MainPage = () => {
  return (
    <>
      <ChristmasTime />
      <Party />
      <GiftItems />
      <About />
    </>
  );
};

export default MainPage;