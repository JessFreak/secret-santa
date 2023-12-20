import React from 'react';
import * as styles from './ChristmasTime.style'
import { Box, Button, Typography } from '@mui/material';
import Header from '@/components/common/header/Header';

const ChristmasTime = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.light}></Box>
      <Header />
      <Box sx={styles.santaText}></Box>
      <Box sx={styles.content}>
        <Box sx={styles.textBox}>
          <Typography variant={'h1'}>Hey, it’s<br /> Christmas time!</Typography>
          <Typography sx={styles.body1}>
            Find the perfect holiday gift for everyone on your list this<br />
            year, no matter what’s your budget.
          </Typography>
          <Button variant='contained' color='success' sx={styles.exploreButton}>Explore Now</Button>
        </Box>
        <Box sx={styles.santaBox}></Box>
      </Box>
    </Box>
  );
};

export default ChristmasTime;