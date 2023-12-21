import React from 'react';
import { Box, Typography } from '@mui/material';
import * as styles from './Footer.style';

const Footer = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.grid}>
        <Box>
          <Typography sx={styles.h1} variant='h1'>Stay In Touch</Typography>
          <Typography sx={styles.body1} variant='body1'>Do not be a stranger and start following us :)</Typography>
        </Box>
        <Box sx={styles.icons}>
          <Box sx={styles.icon} style={{ backgroundImage: 'url(icons/Footer/facebook.png)' }}></Box>
          <Box sx={styles.icon} style={{ backgroundImage: 'url(icons/Footer/instagram.png)' }}></Box>
          <Box sx={styles.icon} style={{ backgroundImage: 'url(icons/Footer/discord.png)' }}></Box>
          <Box sx={styles.icon} style={{ backgroundImage: 'url(icons/Footer/dribbble.png)' }}></Box>
        </Box>
      </Box>
      <Box sx={styles.bg}></Box>
    </Box>
  );
};

export default Footer;