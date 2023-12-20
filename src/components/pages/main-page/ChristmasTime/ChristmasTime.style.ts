import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  backgroundImage: 'url(/icons/ChristmasTime/bg.png)',
  width: '100vw',
  height: '100vh',
};

export const light: SxProps = {
  backgroundImage: 'url(/icons/ChristmasTime/light.png)',
  width: '600px',
  height: '220px',
  transform: 'rotate(4.787deg)',
  position: 'absolute',
  right: '2vw',
};

export const santaText: SxProps = {
  backgroundImage: 'url(/icons/ChristmasTime/santa-text.png)',
  width: '183px',
  height: '810px',
  position: 'absolute',
  left: '10%',
};

export const content: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const santaBox: SxProps = {
  backgroundImage: 'url(/icons/ChristmasTime/santa-image.png)',
  width: '664px',
  height: '726px',
};
