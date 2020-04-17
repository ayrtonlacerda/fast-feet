import styled from 'styled-components/native';
import { colors, metrics } from 'styles';

const selectColors = {
  confirm: colors.GREEN,
  delete: colors.RED,
  select: colors.PURPLE,
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50;
  background-color: ${(props) => selectColors[props.color]};
  border-radius: ${metrics.RADIUS};
  margin-top: ${({ doubleMargin, margin }) => margin || (doubleMargin ? metrics.MEDIUM * 2 : metrics.MEDIUM)}px;
  padding: ${metrics.MEDIUM}px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.WHITE};
`;
