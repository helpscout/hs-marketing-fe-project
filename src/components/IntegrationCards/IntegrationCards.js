import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants';
import Card from '../Card/Card';

const CardWrapperDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 50px;
  > a:nth-child(2) {
    order: 3;
  }
  @media (min-width: ${BREAKPOINTS.L}){
    padding-bottom: 100px;
    margin-bottom: 0;
  }
`;

const IntegrationCards = () => {

  // TODO: make this query dynamic and pass the folder name as prop. Just like Hero Section component.
  const {allMarkdownRemark: {edges: node }} = useStaticQuery(graphql`
    query IntegrationCardsData {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/integration/"}
        },
        sort: {
          order: ASC, fields: frontmatter___slug 
        }
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
            id
          }
        }
      }
    }
  `);

  if (!node || node.length === 0){
    return null;
  }

  return(
    <CardWrapperDIV>
      { node.map(({node}) => {
        return <Card {...node.frontmatter} key={node.id} />
        })
      }
    </CardWrapperDIV>
  );

}

export default IntegrationCards;