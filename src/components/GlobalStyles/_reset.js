import { css } from 'styled-components';

const ResetStyles = css`
  html {
    -webkit-tap-highlight-color: transparent;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
  }

  *,
  :after,
  :before,
  input[type=search] {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  button {
    -webkit-appearance: none;
    border: none;
    background: none;
    outline: 0;
  }
`;

export default ResetStyles;
