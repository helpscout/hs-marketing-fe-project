import React from 'react';
import xss from 'xss';

import Badge, { BADGE_COLORS } from '../../Badge/Badge';
import Icon, { ICON_TYPES } from '../../Icon/Icon';

import {
  FooterColumnDIV,
  FooterColumnH4,
  FooterColumnLI,
  FooterColumnLINK,
  FooterColumnUL,
} from './FooterColumn.styles';

const FooterColumn = ({ options, title }) => (
  <FooterColumnDIV>
    <FooterColumnH4>{title}</FooterColumnH4>
    <FooterColumnUL>
      {options.map(option => (
        <FooterColumnLI key={option.title}>
          <FooterColumnLINK
            as={option.link ? (option.useLink ? undefined : 'a') : 'span'}
            href={option.useLink ? undefined : option.link}
            to={option.useLink ? option.link : undefined}
            rel={option.isExternal ? 'noopener' : undefined}
          >
            <span dangerouslySetInnerHTML={{ __html: xss(option.title) }} />
            {option.isNew && <Badge color={BADGE_COLORS.BLUE}>NEW</Badge>}
            {option.showStatus && <Badge color={BADGE_COLORS.CHARCOAL}>▲ 99.99%</Badge>}
            {option.isExternal && <>{' '}<Icon type={ICON_TYPES.EXTERNAL_LINK} /></>}
          </FooterColumnLINK>
        </FooterColumnLI>
      ))}
    </FooterColumnUL>
  </FooterColumnDIV>
);

export default FooterColumn;
