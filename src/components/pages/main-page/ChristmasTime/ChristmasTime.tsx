import React from 'react';
import { Box } from '@mui/material';
import * as styles from './ChristmasTime.style';
import Header from './Header/Header';
import SnowflakeSvg from './SnowflakeSvg';
import ContentWithButton from '@/components/common/ContentWithButton/ContentWithButton';

const ChristmasTime = () => {
  const generateSnowflakes = () => {
    const snowflakes = [];
    for (let i = 0; i < 150; i++) {
      const size = Math.random() * 50 + 5;
      snowflakes.push(
        <Box
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: 'float 5s infinite linear',
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <SnowflakeSvg />
        </Box>
      );
    }
    return snowflakes;
  };

  return (
    <Box sx={styles.mainContainer} style={{ position: 'relative', overflow: 'hidden' }}>
      <Box sx={styles.hover}></Box>
      <Box sx={styles.light}></Box>
      <Header />
      <Box sx={styles.santaText}></Box>
      <Box sx={styles.content}>
        <ContentWithButton
          head="Hey, it’s Christmas time!"
          text="Find the perfect holiday gift for everyone on your list this year, no matter what’s your budget."
          buttonText="Explore Now"
        />
        <Box sx={styles.santaBox}></Box>
      </Box>
      {generateSnowflakes()}
    </Box>
  );
};

export default ChristmasTime;
