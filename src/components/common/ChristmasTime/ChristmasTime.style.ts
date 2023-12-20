import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  backgroundImage: 'url(/icons/bg.png)',
  width: '100vw',
  height: '100vh',
};

export const light: SxProps = {
  backgroundImage: 'url(/icons/light.png)',
  width: '600px',
  height: '220px',
  transform: 'rotate(4.787deg)',
  position: 'absolute',
  right: '2vw',
};

export const santaText: SxProps = {
  backgroundImage: 'url(/icons/santa-text.png)',
  width: '183px',
  height: '810px',
  position: 'absolute',
  left: '10%',
};

export const body1: SxProps = {
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '34px',
};

export const content: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const textBox: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

export const exploreButton: SxProps = {
  width: 'fit-content',
  padding: '14px 47px',
  textTransform: 'none',
  fontSize: '22px',
  fontWeight: 700,
};

export const santaBox: SxProps = {
  backgroundImage: 'url(/icons/santa-image.png)',
  width: '664px',
  height: '726px',
};