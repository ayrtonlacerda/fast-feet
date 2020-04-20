import styled from 'styled-components';
import { colors, metrics } from '../../styles';

const customMargin = {
  problems: 60,
  orders: 100,
  recipients: 40,
  deliverymans: 60,
}

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 60px;
  margin: 0 5px 0 5px;
  border: 0px;
  background-color: transparent;
  outline: none;
`;

export const MenuContainer = styled.div`
  position: absolute;
  margin: ${({ tables }) => `${customMargin[tables]}px 0 0 0`};
  width: ${({ tables }) => (tables === 'problems' ? 220 : 130)}px;
  border-radius: 4px;
  background-color: ${colors.WHITE};
  box-shadow: 0 -2px 5px 4px ${colors.LIGHT_GREY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  z-index: 99;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 7px);
    top: -7px;
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;  
    border-right: 7px solid transparent; 
    border-bottom: 7px solid ${colors.WHITE};     
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ big }) => (big ? 200 : 110)}px;
  height: 35px;
  border: 0px;
  border-bottom: ${({ border }) => 
    (border ? 1 : 0)}px solid ${colors.LIGHT_GREY};
`;

export const TextButton = styled.p`
  font-size: 16px;
  font-family: Roboto-Regular;
  color: ${colors.GREY};
  margin: 2px 0 0 0;
`;

export const Title = styled.p`
  font-size: ${props => (props.header ? 18 :16)}px;
  font-family: ${props => (props.header ? 'Roboto-Bold' : 'Roboto-Regular')};
  color: ${colors.DARK};
`;