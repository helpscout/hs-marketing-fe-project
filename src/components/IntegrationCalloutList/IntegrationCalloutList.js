import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import IntegrationCallout from './IntegrationCallout/IntegrationCallout'

const IntegrationCalloutListDIV = styled.div`
  border: solid red 2px;  
  display:flex;
`;

const IntegrationCalloutList = () => {
    // assume that we will have more markdown data than just what is related to the integrations page down the road
    const { allMarkdownRemark: { edges:  node  } } = useStaticQuery(graphql`
        query IntegrationCalloutListQuery {
            allMarkdownRemark(
              filter: {frontmatter: {permalink: {regex: "/help-desk-integration/"}}}
            ) {
              edges {
                node {
                  frontmatter {
                    img
                    permalink
                    slug
                    subtitle
                    title
                  }
                }
              }
            }
          }
    `)


    return (
        <IntegrationCalloutListDIV>
        {
            node.map(({ node }) => {
                const {img, permalink, slug, title, subtitle} = node.frontmatter;
                return <IntegrationCallout
                    key={slug}
                    img={img}
                    permalink={permalink}
                    slug={slug}
                    subtitle={subtitle}
                    title={title}
                />  
            })
        }
        </IntegrationCalloutListDIV>
    );
}

export default IntegrationCalloutList;