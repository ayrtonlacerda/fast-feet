import styled from 'styled-components';
import { colors, metrics } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  width: 12vw;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22.5px;
  background-color: ${props => props.color};
`;

export const Ball = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 22.5px;
  background-color: ${props => props.color};
  margin: 5px 5px 5px 10px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-family: 'Roboto-Bold'};
  color: ${props => props.color};
  margin: 5px 10px 5px 5px;
`;