import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../GlobalStyles/GlobalStyles';
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteHeader from "../SiteHeader/SiteHeader";

const Layout = ({
  children,
}) => (
  <>
    <GlobalStyles />
    <SiteHeader />
    <main>
      {children}
    </main>
    <SiteFooter />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
