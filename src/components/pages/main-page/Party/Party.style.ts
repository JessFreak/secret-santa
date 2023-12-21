import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  width: '100vw',
  height: 'fit-content',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  background: '#FFF',
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
