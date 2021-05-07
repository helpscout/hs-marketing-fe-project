import React from 'react';
import styled from 'styled-components';
import './Styles/Hero.css'
import Container from '../../components/Container/Container';
import imageApps from './assets/helpApps.png'
import { BREAKPOINTS } from '../../constants';

const ContainerHelp = styled.div`
	display: flex;
    flex-direction:row;
	margin-left: -26px;
	@media (max-width: ${BREAKPOINTS.M }) {
		margin-left: -33px;
	}
	@media (min-width: ${BREAKPOINTS.M }) and (max-width: ${BREAKPOINTS.L}) {
		margin-left: -34px;
	}
	@media (min-width: ${BREAKPOINTS.L }) {
		
	}
`;


const PageContentDIVLeft = styled.div`
	flex: 30%;
	.hero{
		
		@media (max-width: ${BREAKPOINTS.M }) {
			font-size:36px;
		}
		@media (min-width: ${BREAKPOINTS.M}) {
			font-size:46px
			color: #1D2B36;
			width:678px;
			
		}
		@media (min-width: ${BREAKPOINTS.L }) {
			font-size:60px;
			width: 575px;
		}
	}
	.text-large {
		
		line-height: 38.4px;
		font-family: Graphik;
		font-style: normal;
		font-weight: normal;
		line-height: 38px;
		color:#556575;
		@media (max-width: ${BREAKPOINTS.M -1}) {
			font-size: 22px;
			width:325px;
		  }
		}
		@media (min-width: ${BREAKPOINTS.L }) {
			font-size: 24px;
		}
	}

`;

const PageContentDIVRight = styled.div`
	flex: 60%;
	margin-top:-100px;
`;

const Hero = () => (
  <Container>
		<ContainerHelp className="flex-container">
      <PageContentDIVLeft>
        <h1 className="hero">Help Scout, supercharged</h1>
        <p className="text-large">The tools you love, together with Help Scout.</p>
      </PageContentDIVLeft>	
			<PageContentDIVRight className="imagecont">
				<img alt="" className="background-image" src={imageApps}/>
			</PageContentDIVRight>
    </ContainerHelp>
  </Container>
);

export default Hero;
