import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, metrics } from '../../styles';

// views
export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 155;
  background-color: ${colors.PURPLE};
`;

export const TitleContiner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${metrics.MEDIUM}px;
`;

export const SlapHole = styled.View`
  width: 35;
  height: 35;
`;

// tilte
export const Title = styled.Text`
  font-size: 16;
  color: ${colors.WHITE};
  font-weight: bold;
`;

// icon
export const BackIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-left',
  size: 35,
  color: colors.WHITE,
})``;

// status
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.PURPLE,
  barStyle: 'dark-content',
})`
`;

// button
export const Button = styled.TouchableOpacity``;
