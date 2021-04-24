import styled from 'styled-components';

import { getColor } from '../../utils';

export const SiteFooterFOOTER = styled.footer`
  background: ${getColor('CHARCOAL', 800)};
  padding: 48px 0 24px;

  @media (min-width: 992px) {
    padding-top: 72px;
  }
`;

export const SiteFooterColumnsDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const SiteFooterSocialCopyrightDIV = styled.div`
  position: relative;
  border-top: 1px solid #405261;
  padding-top: 20px;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BCorpA = styled.a`
  display: block;
  opacity: 0.5;
  position: relative;
  transition: opacity .2s;
  width: 60px;
  margin: 20px auto 0;

  &:hover {
    opacity: 0.7; 
  }

  &:focus-visible {
    opacity: 0.7;
    background: transparent;
    box-shadow: inset 0 0 0 2px ${getColor('BLUE', 100)};
  }

  @media (min-width: 992px) {
    left: -8px;
    position: absolute;
    top: -130px;
  }

  img {
    width: 60px;
    height: 88px;
  }
`;
