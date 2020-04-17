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

export const ImageContainer = styled.Image`
  display: flex;
  bottom: 70;
  width: ${metrics.SCREEN_WIDTH * 0.9};
  height: ${metrics.SCREEN_HEIGHT * 0.65};
  background-color: ${colors.VIOLET_LIGHT};
  border-radius: ${metrics.RADIUS};
  elevation: 5;
  shadow-offset: { width: 0, height: 0 };
  shadow-color: ${colors.DARK};
  shadow-opacity: 0.5;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: ${metrics.BIG}px;
  bottom: 70;
`;
