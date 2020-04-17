import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, metrics } from '../../styles';

// views
export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.WHITE};
`;

export const MainContainer = styled.View`
  display: flex;
  flex: 1;
  bottom: 70;
  width: ${metrics.SCREEN_WIDTH * 0.9}
`;
