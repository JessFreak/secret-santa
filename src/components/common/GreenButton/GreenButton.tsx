import React from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/base';
import { GreenButtonStyle } from './GreenButton.style';

const GreenButton = (props: ButtonProps) => {
  return (
      <Button {...props} variant='contained' color='success' sx={GreenButtonStyle}>
        {props.children}
      </Button>
  );
};

export default GreenButton;