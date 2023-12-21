import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  width: '100vw',
  height: '91vh',
  borderRadius: '25px',
  background: '#D9F7FF',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
};

export const form: SxProps = {
  marginTop: '20px',
  background: 'white',
  borderRadius: '25px',
  boxShadow: '0px 0px 40px -20px rgba(0, 0, 0, 0.50)',
  width: '670px',
  height: '528px',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
};

export const inputs: SxProps = {
  display: 'grid',
  rowGap: '30px',
};

export const input: SxProps = {
  width: '466px',
  height: '50px',
};

export const giftBox: SxProps = {
  backgroundImage: 'url(icons/Join/gift-box.svg)',
  width: '75px',
  height: '96px',
  position: 'absolute',
  left: '8vw',
};

export const gifts: SxProps = {
  backgroundImage: 'url(/icons/Join/gifts.png)',
  width: 364,
  height: 198,
  position: 'relative',
  top: '120px',
};
