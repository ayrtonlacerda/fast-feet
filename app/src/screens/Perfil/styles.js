import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

// views
export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${metrics.XXBIG}px;
  background-color: ${colors.WHITE};
`;

export const Text = styled.Text`
  font-size: 12;
  color: ${colors.GREY};
  width: 100%;
  margin-top: ${metrics.BIG};
`;

export const Title = styled.Text`
  font-size: 22;
  color: ${colors.DARK};
  font-weight: bold;
  width: 100%;
`;

// status
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.WHITE,
  barStyle: 'dark-content',
})``;
