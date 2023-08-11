import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Exo 2', sans-serif;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

img{
  display: block;
  width: 100%;
}

`;
