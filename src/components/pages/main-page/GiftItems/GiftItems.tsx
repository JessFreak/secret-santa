import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import * as styles from './GiftItems.style'
import ContentWithIcon from '@/components/common/ContentWithIcon/ContentWithIcon';

const GiftItems = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Container sx={styles.gift}>
        <Typography variant='h2'>Gift Items</Typography>
        <Typography variant='h6'>Christmas is an annual festival commemorating the birth of Jesus Christ,
          a cultural celebration among billions of people around the world.</Typography>
      </Container>
      <Container sx={styles.list}>
        <ContentWithIcon
          url='/icons/GiftItems/hat.png' head='Hat'
          text='Inspirational Christmas Greetings Messages for your loved ones –
          whether you’re sending a small gift to grandma or need something special to write for.' />
        <ContentWithIcon
          url='/icons/GiftItems/tree.png' head='Tree'
          text='Inspirational Christmas Greetings Messages for your loved ones –
          whether you’re sending a small gift to grandma or need something special to write for.' />
        <ContentWithIcon
          url='/icons/GiftItems/bell.png' head='Bell'
          text='Inspirational Christmas Greetings Messages for your loved ones –
          whether you’re sending a small gift to grandma or need something special to write for.' />
      </Container>
    </Box>
  );
};

export default GiftItems;