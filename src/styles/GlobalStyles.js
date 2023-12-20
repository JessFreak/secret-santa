import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', serif;
  }
	
	body {
			background-image: url(/icons/ChristmasTime/bg.png);
			z-index: -1;
	}

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export default GlobalStyle;