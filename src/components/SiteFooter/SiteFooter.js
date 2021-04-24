import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Container from '../Container/Container';

import Copyright from './Copyright/Copyright';
import FooterColumn from './FooterColumn/FooterColumn';
import SocialLinks from './SocialLinks/SocialLinks';
import TaglineColumn from './TaglineColumn/TaglineColumn';

import BCorpImage from './images/b-corp-white.png';

import {
  SiteFooterFOOTER,
  SiteFooterColumnsDIV,
  SiteFooterSocialCopyrightDIV,
  BCorpA,
} from './SiteFooter.styles';

const SiteFooter = () => {
  const { site: { siteMetadata: { footerNav: { items, socialLinks } } } } = useStaticQuery(graphql`
    query FooterNavQuery {
      site {
        siteMetadata {
          footerNav {
            items {
              title
              options {
                isExternal
                isNew
                link
                showStatus
                title
                useLink
              }
            }
            socialLinks {
              icon
              link
              title
            }
          }
        }
      }
    }
  `);
  return (
    <SiteFooterFOOTER role="contentinfo">
      <Container>
        <SiteFooterColumnsDIV>
          <TaglineColumn />
          {items.map(item => <FooterColumn key={item.title} {...item} />)}
        </SiteFooterColumnsDIV>
        <SiteFooterSocialCopyrightDIV>
          <SocialLinks items={socialLinks} />
          <Copyright />
          <BCorpA href="https://bcorporation.net/directory/help-scout">
            <img src={BCorpImage} alt="B Corp" />
          </BCorpA>
        </SiteFooterSocialCopyrightDIV>
      </Container>
    </SiteFooterFOOTER>
  );
}

export default SiteFooter;
