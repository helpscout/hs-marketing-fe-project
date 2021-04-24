import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import HeaderLogo from '../HeaderLogo/HeaderLogo';

import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';

import {
  SiteNavNAV,
} from './SiteNav.styles';

const SiteNav = () => {
  const {
    site: {
      siteMetadata: {
        mainNav: { desktopItems, mobileItems },
      }
    }
  } = useStaticQuery(graphql`
    query MainNavQuery {
      site {
        siteMetadata {
          mainNav {
            desktopItems {
              link
              title
              useTwoColumns
              options {
                description
                icon
                isButton
                isExternal
                link
                title
              }
            }
            mobileItems {
              primary {
                description
                icon
                link
                title
              }
              secondary {
                link
                title
              }
            }
          }
        }
      }
    }
  `);

  return (
    <SiteNavNAV id="SiteNav">
      <HeaderLogo />
      <DesktopNav
        navItems={desktopItems}
      />
      <MobileNav
        navItems={mobileItems}
      />
    </SiteNavNAV>
  );
};

export default SiteNav;
