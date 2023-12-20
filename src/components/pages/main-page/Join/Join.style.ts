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

export const gifts: SxProps = {
  backgroundImage: 'url(/icons/Join/gifts.png)',
  width: 364,
  height: 198,
  position: 'relative',
  top: '120px'
};
