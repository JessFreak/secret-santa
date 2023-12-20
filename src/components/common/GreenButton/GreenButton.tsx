import React, { PropsWithChildren } from 'react';
import { GreenButtonStyle } from './GreenButton.style';
import { Button } from '@mui/material';

const GreenButton = (props: PropsWithChildren) => {
  return (
      <Button variant='contained' color='success' sx={GreenButtonStyle}>
        {props.children}
      </Button>
  );
};

export default GreenButton;