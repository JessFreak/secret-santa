import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
  paddingTop: '5%',
};

export const about: SxProps = {
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  marginRight: '20%',
  marginTop: '20%',
};

export const icons: SxProps = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '3rem',
};
