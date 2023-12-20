import React from 'react';
import { Box, Typography } from '@mui/material';
import GreenButton from '@/components/common/GreenButton/GreenButton';
import * as styles from './ContentWithButton.style';

interface ContentWithButtonProps {
  head: string;
  text: string;
  buttonText: string;
}

const ContentWithButton = ({ head, text, buttonText }: ContentWithButtonProps) => {
  return (
    <Box sx={styles.content}>
      <Typography variant='h1' sx={styles.head}>{head}</Typography>
      <Typography variant='h5' sx={styles.text}>{text}</Typography>
      <GreenButton>{buttonText}</GreenButton>
    </Box>
  );
};

export default ContentWithButton;