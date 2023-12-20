import { SxProps } from '@mui/system';

export const header: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: 'transparent',
  gap: '15rem',
  boxShadow: '0',
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
  fontFamily: 'DM Sans',
  fontSize: '18px',
  fontWeight: 600,
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

export const button: SxProps = {
  textTransform: 'none',
}

