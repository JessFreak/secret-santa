import React from 'react';
import { Box } from '@mui/material';
import * as styles from './ChristmasTime.style'
import Header from './Header/Header';
import ContentWithButton from '@/components/common/ContentWithButton/ContentWithButton';

const ChristmasTime = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.hover}></Box>
      <Box sx={styles.light}></Box>
      <Header />
      <Box sx={styles.santaText}></Box>
      <Box sx={styles.content}>
        <ContentWithButton
          head='Hey, it’s Christmas time!'
          text='Find the perfect holiday gift for everyone on your list this year, no matter what’s your budget.'
          buttonText='Explore Now' />
        <Box sx={styles.santaBox}></Box>
      </Box>
    </Box>
  );
};

export default ChristmasTime;