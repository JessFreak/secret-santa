import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  width: '100vw',
  height: 'fit-content',
  background: 'linear-gradient(95deg, rgba(208, 244, 250, 0.6), #FFF, #FFF, rgba(208, 244, 250, 0.6))',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  justifyItems: 'center',
  paddingTop: '30px',
  '& h1': {
    width: '520px',
    fontSize: '65px',
  },
  '& h5' : {
    fontSize: '18px',
    fontWeight: 400,
  },
};
