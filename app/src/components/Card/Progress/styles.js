import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin: 25px 0 20px 0;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Ball = styled.View`
  width: 12;
  height: 12;
  border-width: 2;
  border-radius: 5;
  border-color: ${colors.PURPLE};
  background-color: ${({ filled }) => (filled ? colors.PURPLE : colors.WHITE)};
`;

export const Line = styled.View`
  width: 25%;
  height: 3;
  background-color: ${colors.PURPLE};
`;

export const Title = styled.Text`
  font-size: 8;
  color: ${colors.GREY};
  margin: 10px 40px 0px 30px;
`;
