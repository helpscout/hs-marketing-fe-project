import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button, { BUTTON_SIZES } from '../../../Button/Button';
import Icon, { ICON_TYPES } from '../../../Icon/Icon';

import NavItemOption from '../NavItemOption/NavItemOption';

import {
  MobileNavBUTTON,
  MobileNavCloseBUTTON,
  MobileNavDIV,
  MobileNavLoginP,
  MobileNavMenuDIV,
  MobileNavMenuPrimaryUL,
  MobileNavMenuSecondaryDIV,
  MobileNavMenuSecondaryUL,
  MobileNavOverlayDIV,
} from './MobileNav.styles';

const MobileNav = ({ navItems, secureUrl, signupUrl }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalEl, setModalEl] = React.useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const _modalEl = document.createElement('div');

    setModalEl(_modalEl);
    document.body.append(_modalEl);

    return () => {
      document.body.removeChild(_modalEl);
      setModalEl(null);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <MobileNavDIV>
      <MobileNavBUTTON onClick={() => setIsOpen(true)} aria-label="Open Site Navigation">
        <Icon type={ICON_TYPES.MENU} />
      </MobileNavBUTTON>
      {(modalEl && isOpen) ?
        ReactDOM.createPortal(
          <MobileNavOverlayDIV>
            <MobileNavMenuDIV>
              <MobileNavCloseBUTTON onClick={() => setIsOpen(false)} aria-label="Close Site Navigation">
                <Icon type={ICON_TYPES.CLOSE} />
              </MobileNavCloseBUTTON>
              <MobileNavMenuPrimaryUL>
                {navItems.primary.map(item =>
                  <NavItemOption key={item.title} showDescription={false} {...item} />
                )}
              </MobileNavMenuPrimaryUL>
              <MobileNavMenuSecondaryDIV>
                <MobileNavMenuSecondaryUL>
                  {navItems.secondary.map(item =>
                    <li key={item.title}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  )}
                </MobileNavMenuSecondaryUL>
                <Button href={signupUrl} fullwidth size={BUTTON_SIZES.M}>Free Trial</Button>
                <MobileNavLoginP>
                  Already a Customer?
              {' '}
                  <a href={secureUrl}>Login</a>
                </MobileNavLoginP>
              </MobileNavMenuSecondaryDIV>
            </MobileNavMenuDIV>
          </MobileNavOverlayDIV>
          , modalEl) : null
      }
    </MobileNavDIV>
  );
}

export default MobileNav;
