import React from 'react';
import { Box, Typography } from '@mui/material';
import * as styles from './Join.style'
import Image from 'next/image';

const Join = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <Typography variant='h2' fontWeight='bold'>Join the party</Typography>
      </Box>
      <Box>
        <Box sx={styles.gifts}></Box>
        <Image src='/icons/Join/santa.png' alt='santa' width={551} height={515} />
      </Box>
    </Box>
  );
};

export default Join;