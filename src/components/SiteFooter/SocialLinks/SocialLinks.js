import React from 'react';
import styled from 'styled-components';

import { getColor } from '../../../utils';

import Icon from '../../Icon/Icon';

const SiteFooterSocialUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  text-align: center;

  @media (min-width: 992px) {
    margin-bottom: 0;
    text-align: left;
  }

  li {
    display: inline-block;
    padding: 6px 12px 0 0;

    &:last-child {
      padding-right: 0;
    }

    @media (min-width: 992px) {
      &:last-child {
        padding-right: 12px;
      }
    }
  }

  a {
    display: inline-block;
    vertical-align: bottom;
  }

  a:focus-visible {
    background: #253642;
    border-radius: 4px;
    box-shadow:
      0 0 0 2px ${getColor('CHARCOAL', 800)},
      0 0 0 4px ${getColor('BLUE', 100)};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SocialLinks = ({ items }) => (
  <SiteFooterSocialUL>
    {items.map(item => (
      <li key={item.title}>
        <a
          aria-label={item.title}
          href={item.link}
          title={item.title}
        >
          <Icon type={item.icon} />
        </a>
      </li>
    ))}
  </SiteFooterSocialUL>
);

export default SocialLinks;
