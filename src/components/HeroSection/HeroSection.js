import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from "prop-types";
import styled from 'styled-components';

import {COLORS, BREAKPOINTS} from '../../constants';
import Container from '../../components/Container/Container';


const HeroSECTION = styled.section`
  margin-top: -90px;
  padding-top: 90px;
  position: relative;
  overflow: hidden;
  &:before {
    background: rgba(0,0,0,0) linear-gradient(180deg, ${COLORS.PURPLE[100]} 20.69%, rgba(249, 249, 255, 0) 100%);
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper{
    display: none;
    top: 0;
    left: calc(50% - 25px);
    width: 100%;
    /* width: 65%; Uncomment if you want the image width to be fully visible */
    max-width: 960px;
    position: absolute;
    @media (min-width: ${BREAKPOINTS.M}){
      display: block;
    }
  }
`;

const HeroContentDIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 30px 0 50px;
  @media (min-width: ${BREAKPOINTS.M}){
    padding: 100px 0 150px;
  }
`;

const HeroContentContainerDIV = styled.div`
  flex: 0 0 100%;
  @media (min-width: ${BREAKPOINTS.M}){
    flex: 0 0 50%;
    max-width: 505px;
  }
`;

const HeroSection = ({
  headline = '',
  subheadline = '',
  imgFileName = '',
  imgAlt = 'Help Scout'
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  width: 960
                  formats: [AUTO, WEBP, AVIF]
                  placeholder: NONE
                )
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const imageNode = data.images.edges.find(n => {
        return n.node.relativePath.includes(imgFileName);
      });

      const imageDataObj = getImage(imageNode.node);
      if (!imageDataObj) { return null; }
      
      return (
        <HeroSECTION>
          <Container>
              <HeroContentDIV>
                <HeroContentContainerDIV>
                  <h1 className="display">{headline}</h1>
                  <p className="text-large">{subheadline}</p>
                </HeroContentContainerDIV>
              </HeroContentDIV>
          </Container>
          <GatsbyImage image={imageDataObj} alt={imgAlt} />
        </HeroSECTION>
      );
    }}
  />
)

HeroSection.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string.isRequired,
  imgFileName: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};

export default HeroSection;
