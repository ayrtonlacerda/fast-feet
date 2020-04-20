import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Box = styled.View`
  align-items: center;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH * 0.7};
  padding: ${metrics.MEDIUM}px;
  background-color: ${colors.WHITE};
  border-radius: ${metrics.SMALL}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ error }) => (error ? colors.RED : colors.PURPLE)};
  margin: 0 0 25px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.DARK};
  margin: 0 0 25px;
  text-align: center;
`;
