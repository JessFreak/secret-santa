import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', serif;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export default GlobalStyle;