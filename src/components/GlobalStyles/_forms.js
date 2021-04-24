import { css } from 'styled-components';

import { getColor } from '../../utils';

const FormsStyles = css`
  input {
    appearance: none;
    background-color: white;
    border: 1px solid ${getColor('ASH', 500)};
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-block;
    font-family: inherit;
    font-size: 100%;
    height: 36px;
    line-height: 34px;
    margin: 0;
    outline: 0;
    padding: 0 8px;
    position: relative;
    vertical-align: middle;
    width: 100%;
  }

  input:focus {
    border-color: ${getColor('BLUE', 500)};
    outline: 0;
  }

  input[type="radio"],
  input[type="checkbox"] {
    position: relative;
    width: 24px !important;
    height: 24px !important;
    border-radius: 50%;
    border: 1px solid ${getColor('ASH', 800)};
    transition: border-color 0.2s;
  }

  input[type="checkbox"] {
    width: 18px !important;
    height: 18px !important;
    transition: all 0.2s;
  }

  label:hover input[type="radio"],
  input[type="radio"]:hover,
  label:hover input[type="checkbox"],
  input[type="checkbox"]:hover {
    border-color: ${getColor('BLUE', 500)};
  }

  input[type="radio"]:focus-visible,
  input[type="checkbox"]:focus-visible {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px ${getColor('BLUE', 500)};
    border-radius: 50%;
  }

  input[type="radio"]::after,
  input[type="checkbox"]::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${getColor('BLUE', 500)};
    opacity: 0;
    transition: opacity 0.2s;
  }

  input[type="checkbox"]::after {
    width: 18px;
    height: 18px;
    background: center center / 8px auto no-repeat url('/images/icons/icon--checkmark-small-white.svg');
  }

  input[type="checkbox"]:checked {
    border-color: ${getColor('BLUE', 500)};
    background: ${getColor('BLUE', 500)};
  }

  input[type="radio"]:checked::after,
  input[type="checkbox"]:checked::after {
    opacity: 1;
  }

  input[type="file"] {
    border: none;
    padding: 0;
  }
`;

export default FormsStyles;
