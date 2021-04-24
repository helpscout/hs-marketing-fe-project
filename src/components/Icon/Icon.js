import React from 'react';

import IconArrowRight from './svgs/IconArrowRight';
import IconChevronLeft from './svgs/IconChevronLeft';
import IconClear from './svgs/IconClear';
import IconClose from './svgs/IconClose';
import IconEmail from './svgs/IconEmail';
import IconExternalLink from './svgs/IconExternalLink';
import IconFacebook from './svgs/IconFacebook';
import IconFacebookMinimal from './svgs/IconFacebookMinimal';
import IconInfo from './svgs/IconInfo';
import IconLinkedIn from './svgs/IconLinkedIn';
import IconMenu from './svgs/IconMenu';
import IconPlay from './svgs/IconPlay';
import IconPlaylist from './svgs/IconPlaylist';
import IconSearch from './svgs/IconSearch';
import IconTwitter from './svgs/IconTwitter';

export const ICON_TYPES = {
  ARROW_RIGHT: 'ARROW_RIGHT',
  CHEVRON_LEFT: 'CHEVRON_LEFT',
  CLEAR: 'CLEAR',
  CLOSE: 'CLOSE',
  EMAIL: 'EMAIL',
  EXTERNAL_LINK: 'EXTERNAL_LINK',
  FACEBOOK: 'FACEBOOK',
  FACEBOOK_MINIMAL: 'FACEBOOK_MINIMAL',
  INFO: 'INFO',
  LINKEDIN: 'LINKEDIN',
  MENU: 'MENU',
  PLAY: 'PLAY',
  PLAYLIST: 'PLAYLIST',
  SEARCH: 'SEARCH',
  TWITTER: 'TWITTER',
};

const Icon = ({ type }) => {
  switch (type) {
    case ICON_TYPES.ARROW_RIGHT:
      return <IconArrowRight />;

    case ICON_TYPES.CHEVRON_LEFT:
      return <IconChevronLeft />;

    case ICON_TYPES.CLEAR:
      return <IconClear />;

    case ICON_TYPES.CLOSE:
      return <IconClose />;

    case ICON_TYPES.EMAIL:
      return <IconEmail />;

    case ICON_TYPES.EXTERNAL_LINK:
      return <IconExternalLink />;

    case ICON_TYPES.FACEBOOK:
      return <IconFacebook />;

    case ICON_TYPES.FACEBOOK_MINIMAL:
      return <IconFacebookMinimal />;

    case ICON_TYPES.INFO:
      return <IconInfo />;

    case ICON_TYPES.LINKEDIN:
      return <IconLinkedIn />;

    case ICON_TYPES.MENU:
      return <IconMenu />;

    case ICON_TYPES.PLAY:
      return <IconPlay />;

    case ICON_TYPES.PLAYLIST:
      return <IconPlaylist />;

    case ICON_TYPES.SEARCH:
      return <IconSearch />;

    case ICON_TYPES.TWITTER:
      return <IconTwitter />;

    default:
      return null;
  }
};

export default Icon;
