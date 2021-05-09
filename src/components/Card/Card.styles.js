import { Link } from 'gatsby';
import styled from 'styled-components';
import { FONT_STYLES, BREAKPOINTS } from '../../constants';
import { getFontStyle, getColor } from '../../utils';

export const CardLink = styled(Link)`
  background: #fff;
  box-shadow: 0px 5px 10px rgba(7, 30, 87, 0.1);
  border-radius: 6px;
  bottom: 0;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  padding: 20px 18px 90px;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  transition: all 0.25s ease 0s;
  .card-badge {
    align-self: flex-end;
    ${getFontStyle(FONT_STYLES.OVERLINE_XS)}
    line-height: 1em;
    letter-spacing: 0.07em;
  }
  @media (min-width: ${BREAKPOINTS.L}){
    flex: 0 0 calc(33% - 35px);
    margin-bottom:0;
    padding-bottom: 110px;
    &:hover{
      bottom: 10px;
      box-shadow: 0px 20px 30px rgba(7, 30, 87, 0.2);

      .card-bottom-link {
        background-color: ${getColor('ASH', 200)};
      }
    }
  }
`;

export const CardIMG = styled.img`
  height: 70px;
  margin-bottom: 5px;
  @media (min-width: ${BREAKPOINTS.L}){
    height: 80px;
  }
`;

export const CardTxtP = styled.p`
  ${getFontStyle(FONT_STYLES.TEXT_M)}
  text-decoration: none;
  color: ${getColor('CHARCOAL', 400)};
  text-align: center;
  padding: 0 18px;
  
`;

export const CardBottomLinkSPAN = styled.span`
  border-top: 1px solid ${getColor('ASH', 300)};
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor('BLUE', 500)};
  font-size: 18px;
  font-weight: 500;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  &:after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    margin-left: 5px;
    transform: rotate(225deg);
    right: 0;
    margin: auto 0 auto 5px;
    transition: all 0.25s ease 0s;
  }
`;