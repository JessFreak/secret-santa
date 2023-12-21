import React, { useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import * as styles from './Join.style'
import GreenButton from '@/components/common/GreenButton/GreenButton';

const Join = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registrants = JSON.parse(Cookies.get('registrants') || '[]');

    if (registrants.length) {
      const randPreviousRegistrant = registrants[Math.floor(Math.random() * registrants.length)];
      alert(JSON.stringify(randPreviousRegistrant));
    } else {
      alert('Ми надішлемо вашого підопічного згодом');
    }

    const currentRegistrant = { name, email, subject };
    const updatedRegistrants = [...registrants, currentRegistrant];

    Cookies.set('registrants', JSON.stringify(updatedRegistrants));

    setName('');
    setEmail('');
    setSubject('');
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <Typography variant='h2' fontWeight='bold'>Join the party</Typography>
        <Box sx={styles.form}>
          <Box>
            <Typography variant='h3' fontWeight='bold'>Contact Us</Typography>
            <Typography variant='body1'>Please fill this form in a decent manner</Typography>
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
                />
              </FormControl>
            </Box>
            <GreenButton type='submit'>Submit</GreenButton>
          </form>
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