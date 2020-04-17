import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 47px;
  width: ${props => (props.big ? '300px': null)};
  margin: ${props => (props.left ? '10px 0px 10px 15px' : '10px 0px 10px 0px')};
  border: 0px solid ${colors.PURPLE};
  border-radius: 5px;
  background-color: ${props => (props.grey ? colors.LIGHT_GREY : colors.PURPLE)};
  outline: none;
`;

export const TextButton = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: ${props => (props.icon ? '0px 15px 0px 5px' : '0px 15px 0px 15px')} ;
  color: ${colors.WHITE};
`;