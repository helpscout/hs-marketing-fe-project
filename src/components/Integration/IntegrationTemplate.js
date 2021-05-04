import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';
import { getColor } from '../../utils';



const IntegrationsPageFeatured = styled.div`
    display: flex;
    flex-wrap: wrap;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: stretch;
    align-items: stretch;
    margin-bottom: 70px;

    @media (min-width: ${BREAKPOINTS.L}) {
      -moz-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 100px;
    }
    .integrationLink {
      flex: 0 0 100%;
      position: relative;
      bottom: 0px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      -moz-box-align: center;
      align-items: center;
      -moz-box-pack: center;
      justify-content: center;
      box-shadow: rgba(22, 51, 127, 0.1) 0px 5px 10px;
      padding: 10px 35px 80px;
      margin-bottom: 30px;
      border-radius: 6px;
      transition: all 0.25s ease 0s;
      overflow: hidden;

      &:hover {
        bottom: 8px;
        box-shadow: rgba(22, 51, 127, 0.2) 0px 22px 28px;
      }
    
      @media (min-width: ${BREAKPOINTS.L}) {
        flex: 0 0 calc(33% - 35px);
        margin-bottom: 0px;
        padding: 30px 35px 110px;
      }
      .integrationImg {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
        height: 80px;
        max-width: 148px;
        
      }
      p, .learnMore{
        letter-spacing: -0.005em;
        text-align: center;
      }
      p {
        font-size: 18px;
        line-height: 1.8;
        letter-spacing: -0.005em;
        text-align: center;
        margin: 0px;
        color: ${getColor('CHARCOAL', 400)}
      }
      .learnMore {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 60px;
        line-height: 56px;
        font-weight: 500;
        border-top: 1px solid rgb(241, 243, 245);
        transition: background-color 0.3s ease 0s;
        &:after{
          border-top-width: 2px;
          border-top-style: solid;
          border-right-width: 2px;
          border-right-style: solid;
          content: "";
          display: inline-block;
          margin-left: 0.3em;
          position: relative;
          pointer-events: none;
          width: 6px;
          height: 6px;
          transform: rotate(45deg);
          transition: all 0.15s ease 0s;
          vertical-align: middle;
        }
        &:hover{
          background: rgb(249, 250, 250) none repeat scroll 0% 0%;
        }
        @media (min-width: ${BREAKPOINTS.L}) {
          font-size: 18px;
        }
      }
    }
`;

export const Badge = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 9px;
  letter-spacing: 0.07em;
  border-radius: 2px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  padding: 3px 5px 4px;
  text-transform: uppercase;
  vertical-align: middle;
  background-color:  ${getColor('PURPLE', 700)};
  color: white;
`;

const IntegrationContent = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <IntegrationsPageFeatured>
      { edges.map (edge => {
        const {frontmatter} = edge.node
        return (
          <Link 
            className="integrationLink" 
            to={frontmatter.permalink} 
            key={frontmatter.slug}
          >
            <Badge>Plus</Badge>
            <img className="integrationImg" src={frontmatter.img} alt={frontmatter.title} />
            <p>{frontmatter.subtitle}</p>
            <span className="learnMore">Learn More</span>
          </Link >
          )
      })}
    </IntegrationsPageFeatured>
    )
}


const IntegrationTemplate = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
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
    `}
    render={data => <IntegrationContent data={data} />}
  />
)



export default IntegrationTemplate
