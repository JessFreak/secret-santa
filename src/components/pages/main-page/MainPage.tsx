import React from 'react';
import ChristmasTime from './ChristmasTime/ChristmasTime';
import Party from './Party/Party';
import GiftItems from './GiftItems/GiftItems';
import About from './About/About';
import Join from './Join/Join';
import Footer from './Footer/Footer';

const MainPage = () => {
  return (
    <>
      <ChristmasTime />
      <Party />
      <GiftItems />
      <About />
      <Join />
      <Footer />
    </>
  );
};

export default MainPage;