import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import * as styles from './ContentWithIcon.style';

interface ContentWithButtonProps {
  url: string;
  head: string;
  text: string;
}

const ContentWithIcon = ({ head, text, url }: ContentWithButtonProps) => {
  return (
    <Box>
      <Image src={url} alt={head} width={70} height={70}/>
      <Typography variant='h3'>{head}</Typography>
      <Typography variant='h6' sx={styles.text}>{text}</Typography>
    </Box>
  );
};

export default ContentWithIcon;