import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container/Container';

import SiteNav from './SiteNav/SiteNav';

import {
  SiteHeaderDIV,
  SiteHeaderHEADER,
  SiteNavWrapperDIV,
} from './SiteHeader.styles';

const SiteHeader = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScrollState = () => {
      const htmlEl = document.querySelector('html');
      const scrollPosition = htmlEl.scrollTop;
      if (scrollPosition > 200 && !isFixed) {
        setIsFixed(true);
      }
      if (scrollPosition <= 200 && isFixed) {
        setIsFixed(false);
      }
    }

    const handleScroll = () => window.requestAnimationFrame(updateScrollState);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isFixed]);

  return (
    <SiteHeaderDIV>
      <SiteHeaderHEADER isFixed={isFixed}>
        <SiteNavWrapperDIV>
          <Container>
            <SiteNav />
          </Container>
        </SiteNavWrapperDIV>
      </SiteHeaderHEADER>
    </SiteHeaderDIV>
  );
};

SiteHeader.propTypes = {
  includeHiya: PropTypes.bool,
  includeLoginButton: PropTypes.bool,
  includeProgress: PropTypes.bool,
  isUnsticky: PropTypes.bool,
}

export default SiteHeader;
