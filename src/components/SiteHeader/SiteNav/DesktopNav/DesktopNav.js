import React from 'react';

import Button, { BUTTON_COLORS } from '../../../Button/Button';

import NavItem from '../NavItem/NavItem';

import {
  DesktopNavDIV,
  SiteNavUL,
} from './DesktopNav.styles';

const DesktopNav = ({ navItems }) => (
  <DesktopNavDIV>
    <SiteNavUL role="menu">
      {navItems.map((navItemProps) => <NavItem key={navItemProps.title} {...navItemProps} />)}
    </SiteNavUL>
    <div>
      <Button color={BUTTON_COLORS.TRANSPARENT} href="#">Get a Demo</Button>
      <Button href="#" id="free-trial-link">Free Trial</Button>
    </div>
  </DesktopNavDIV>
);

export default DesktopNav;
