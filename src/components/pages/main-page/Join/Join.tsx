import React, { useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import MuiAlert from '@mui/material/Alert';
import { Box, FormControl, TextField, Typography, Snackbar } from '@mui/material';
import * as styles from './Join.style'
import GreenButton from '@/components/common/GreenButton/GreenButton';

const Join = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'success'>('success');
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registrants = JSON.parse(Cookies.get('registrants') || '[]');

    if (registrants.length) {
      const randPreviousRegistrant = registrants[Math.floor(Math.random() * registrants.length)];
      setSnackbarSeverity('success');
      setSnackbarMessage(`
        Full name: ${randPreviousRegistrant.name}
        Email: ${randPreviousRegistrant.email}
        Subject: ${randPreviousRegistrant.subject}
      `);
      setOpenSnackbar(true);
    } else {
      setSnackbarSeverity('error');
      setSnackbarMessage('Ми надішлемо вашого підопічного згодом')
      setOpenSnackbar(true);
    }

    const currentRegistrant = { name, email, subject };
    const updatedRegistrants = [...registrants, currentRegistrant];

    Cookies.set('registrants', JSON.stringify(updatedRegistrants), {expires: 1});

    setName('');
    setEmail('');
    setSubject('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <Typography sx={styles.h2} variant='h2'>Join the party</Typography>
        <Box sx={styles.form}>
          <Box sx={styles.text}>
            <Typography sx={styles.h3} variant='h3' fontWeight='bold'>Contact Us</Typography>
            <Typography sx={styles.body1} variant='body1'>Please fill this form in a decent manner</Typography>
          </Box>
          <form style={{ display: 'grid', rowGap: '30px' }} onSubmit={onSubmitHandler}>
            <Box sx={styles.giftBox}></Box>
            <Box sx={styles.inputs}>
              <FormControl>
                <TextField
                  required
                  sx={styles.input}
                  label='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  inputProps={{
                    pattern: '\\S.*'
                  }}
                  error={Boolean(name) && !name.match(/^\S.*$/)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  required
                  type='email'
                  sx={styles.input}
                  label='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  required
                  sx={styles.input}
                  label='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  inputProps={{
                    pattern: '\\S.*'
                  }}
                  error={Boolean(name) && !name.match(/^\S.*$/)}
                />
              </FormControl>
            </Box>
            <GreenButton type='submit'>Submit</GreenButton>
          </form>
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbarSeverity}>
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </Box>
      </Box>
      <Box>
        <Box sx={styles.gifts}></Box>
        <Image src='/icons/Join/santa.png' alt='santa' width={551} height={515}/>
      </Box>
    </Box>
  );
};

export default Join;