import React from 'react';
import Image from 'next/image';
import * as styles from './Header.style'
import { AppBar, Button, Box, List, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static' sx={styles.header}>
      <Toolbar sx={styles.header}>
        <Box>
          <Image src='/icons/logo.png' alt='logo' width={185} height={70} />
        </Box>
        <Box>
          <List sx={styles.list}>
            <Button sx={styles.firstListItem}>New</Button>
            <Button sx={styles.listItem}>Popular</Button>
            <Button sx={styles.listItem}>Gifts</Button>
            <Button sx={styles.listItem}>Cards</Button>
          </List>
        </Box>
        <Box sx={styles.buttons}>
          <Button sx={styles.listItem}>Sign in</Button>
          <Button variant='contained' color='success' sx={styles.button}>Sign up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
