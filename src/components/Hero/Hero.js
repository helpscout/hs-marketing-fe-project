import React from 'react';
import styled from 'styled-components';
import './Styles/Hero.css'
import Container from '../../components/Container/Container';
import imageApps from './assets/helpApps.png'


const ContainerHelp = styled.div`
		display: flex;
    flex-direction:row;
	}
`;


const PageContentDIVLeft = styled.div`
	flex: 30%;
	.hero{
		font-size:60px;
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
        <h1 className="hero">Help Scout, superchared</h1>
        <p className="text-large">The tools you love, together with Help Scout.</p>
      </PageContentDIVLeft>	
			<PageContentDIVRight className="imagecont">
				<img alt="" className="background-image" src={imageApps}/>
			</PageContentDIVRight>
    </ContainerHelp>
  </Container>
);

export default Hero;
