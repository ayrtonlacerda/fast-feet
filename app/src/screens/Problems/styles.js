import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

// views
export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.WHITE};
`;

export const MainContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  bottom: 85;
  width: ${metrics.SCREEN_WIDTH};
  padding: ${metrics.MEDIUM}px;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55;
  border-radius: ${metrics.RADIUS};
  background-color: ${colors.WHITE};
  elevation: 5;
  shadow-offset: { width: 0, height: 0 };
  shadow-color: ${colors.DARK};
  shadow-opacity: 0.5;
  margin-bottom: ${metrics.MEDIUM};
  padding: ${metrics.MEDIUM}px;
`;

// title
export const Title = styled.Text`
  font-size: 18;
  color: ${colors.WHITE};
  font-weight: bold;
  margin-top: ${metrics.BIG}px;
  bottom: 90;
`;

export const Text = styled.Text`
  font-size: ${({ big }) => (big ? 14 : 12)};
  color: ${colors.DARK};
  width: ${({ big }) => (big ? 75 : 20)}%;
`;
