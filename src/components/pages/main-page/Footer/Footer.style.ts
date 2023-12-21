import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  width: '100vw',
  height: '30vh',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
};

export const grid: SxProps = {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
};

export const h1: SxProps = {
  fontFamily: 'Yeseva One',
  fontSize: '38px',
  fontWeight: 'bold',
  lineHeight: 'normal',
};

export const body1: SxProps = {
  fontFamily: 'DM Sans',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '34px',
};

export const icons: SxProps = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '16px',
};

export const icon: SxProps = {
  width: '53px',
  height: '53px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'lightpink',
  },
};

export const bg: SxProps = {
  backgroundImage: 'url(/icons/Footer/bg.png)',
  position: 'relative',
  bottom: '-1rem',
  width: '100%',
  height: '164px',
};