import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import * as styles from './About.style';
import ContentWithIcon from '@/components/common/ContentWithIcon/ContentWithIcon';

const About = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Image alt='tree' src='/icons/About/big-tree.png' width={670} height={904}/>
      <Box sx={styles.about}>
        <Container>
          <Typography variant='h2'>About the live event</Typography>
          <Typography variant='h6'>
            Fill your Christmas holiday with good cheer, joyful decorations, and unforgettable experience.
            Feel free to attend our Christmas event with your children and family and
            celebrate the most anticipated winter holiday. From Christmas carols to activities for adults and children,
            Sannta has a lot to offer.  </Typography>
        </Container>
        <Box sx={styles.icons}>
          <ContentWithIcon url='/icons/About/wreath.png' head='Beautiful Design'
            text='Contrary to popular belief, Lorem Ipsum is not simply random text.' />
          <ContentWithIcon url='/icons/About/bels.png' head='Great Sound'
            text='Contrary to popular belief, Lorem Ipsum is not simply random text.' />
        </Box>
      </Box>
    </Box>
  );
};

export default About;