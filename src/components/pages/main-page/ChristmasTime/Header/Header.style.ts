import { SxProps } from '@mui/system';

export const header: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: 'transparent',
  gap: '20rem',
  boxShadow: '0',
  '@media (max-width: 1500px)': {
    gap: '12rem',
  },
  '@media (max-width: 1250px)': {
    gap: '8rem',
  },
};

export const list: SxProps = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0,
};

export const listItem: SxProps = {
  marginRight: '10px',
  color: 'black',
  fontSize: '18px',
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight: 'normal',
  textTransform: 'none',
};

export const firstListItem: SxProps = {
  ...listItem,
  color: 'darkgreen',
};

export const buttons: SxProps = {
  display: 'flex',
  gap: '10px',
};
