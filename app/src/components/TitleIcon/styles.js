import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Imgs } from 'assets';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: ${metrics.SCREEN_WIDTH * 0.85};
`;

export const Title = styled.Text`
  font-size: 14;
  color: ${colors.PURPLE};
  font-weight: bold;
  margin-left: ${metrics.MEDIUM};
`;

// imgs
export const ImageTruck = styled.Image.attrs({
  source: Imgs.TRUCK,
  resizeMode: 'contain',
})`
  width: 25;
`;

// icon
export const CalendarIcon = styled(Ionicons).attrs({
  name: 'md-calendar',
  size: 25,
  color: colors.PURPLE,
})``;
