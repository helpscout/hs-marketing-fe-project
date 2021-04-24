import React from 'react';
import styled from 'styled-components';

import { getColor } from '../../../utils';

import Button from '../../Button/Button';

import FooterLogo from './FooterLogo/FooterLogo';

const SiteFooterAMPFOOTER = styled.footer`
  background: ${getColor('CHARCOAL', 800)}};
  color: white;
  font-size: 20px;
  padding: 3rem 15px;
  text-align: center;

  p:last-of-type {
    font-size: 15px;
    margin-top: 1.5rem;
  }

  ul {
    list-style: none;
    font-size: 13px;

    li {
      display: inline-block;
      padding-right: 5px;

      a {
        padding-right: 5px;
        text-decoration: none;
        color: ${getColor('ASH', 800)};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SiteFooterAMPLogoA = styled.a`
  display: block;
  width: 25px;
  margin: 0 auto 1rem;
`;

const SiteFooterAMP = () => (
  <SiteFooterAMPFOOTER>
    <SiteFooterAMPLogoA href="/"><FooterLogo /></SiteFooterAMPLogoA>
    <p>Help Scout is a better way to talk with your customers.</p>
    <Button href="/email-management-software/">Get Your First Month Free</Button>
    <p>Made by hand in 75 cities around the world</p>
    <ul>
      <li>
        <a href="/company/legal/security/">Security</a>•
      </li>
      <li>
        <a href="/company/legal/privacy/">Privacy</a>•
      </li>
      <li>
        <a href="/company/legal/terms-of-service/">Terms of Service</a>
      </li>
      <li>© 2021 <a href="/" target="_blank">Help Scout</a></li>
    </ul>
  </SiteFooterAMPFOOTER>
);

export default SiteFooterAMP;
