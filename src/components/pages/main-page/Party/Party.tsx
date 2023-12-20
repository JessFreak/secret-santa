import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import * as styles from './Party.style';
import ContentWithButton from '@/components/common/ContentWithButton/ContentWithButton';

const Party = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Image src='/icons/Party/santa.png' alt='santa' width={583} height={746} />
      <ContentWithButton
        head='Santa claus is Coming'
        text='Fill your Christmas holiday with good cheer, joyful decorations, and unforgettable experience.
        Feel free to attend our Christmas event with your children and family
        and celebrate the most anticipated winter holiday.
        From Christmas carols to activities for adults and children, Sannta has a lot to offer.'
        buttonText='Get Your Gift' />
      <ContentWithButton
        head='Christmas wish and party'
        text='Fill your Christmas holiday with good cheer, joyful decorations, and unforgettable experience.
        Feel free to attend our Christmas event with your children and family
        and celebrate the most anticipated winter holiday.
        From Christmas carols to activities for adults and children, Sannta has a lot to offer.'
        buttonText='Join the Party' />
      <Image src='/icons/Party/tree.png' alt='tree' width={611} height={714} />
    </Box>
  );
};

export default Party;