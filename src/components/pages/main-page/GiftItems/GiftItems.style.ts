import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  width: '100vw',
  height: '80vh',
  display: 'grid',
  borderRadius: '25px',
  background: '#D9F7FF',
  textAlign: 'center',
};

export const gift: SxProps = {
  width: '750px',
  marginTop: '8%',
  '& h2': {
    fontFamily: 'Yeseva One',
    fontSize: '65px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
  },
  '& h6': {
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '34px',
  },
};

export const list: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '4rem'
};
