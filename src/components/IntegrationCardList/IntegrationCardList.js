import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { BREAKPOINTS } from '../../constants';


import IntegrationCard from './IntegrationCard/IntegrationCard'

const IntegrationCardListDIV = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:0 auto 110px auto;

  @media (max-width: ${BREAKPOINTS.M}) {
    width: 100%;
    max-width: 700px;
    flex-direction:column;
    margin-bottom:40px;
  }

`;

const IntegrationCardList = () => {
    // assume that we will have more markdown data than just what is related to the integrations page down the road
    const { allMarkdownRemark: { edges:  node  } } = useStaticQuery(graphql`
        query IntegrationCardListQuery {
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
        <IntegrationCardListDIV>
        { // not sure if brand order matters, but reverse array to match design order
            node.reverse().map(({ node }) => {
                const {img, permalink, slug, title, subtitle} = node.frontmatter;
                return <IntegrationCard
                    key={slug}
                    img={img}
                    permalink={permalink}
                    slug={slug}
                    subtitle={subtitle}
                    title={title}
                />  
            })
        }
        </IntegrationCardListDIV>
    );
}

export default IntegrationCardList;

