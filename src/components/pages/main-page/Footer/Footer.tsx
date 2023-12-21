import React from 'react';
import { Box } from '@mui/material';
import * as styles from './Footer.style';

const Footer = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.grid}>
        <Box>text</Box>
        <Box>icons</Box>
      </Box>
      <Box sx={styles.bg}></Box>
    </Box>
  );
};

export default Footer;