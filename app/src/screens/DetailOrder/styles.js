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
  bottom: 90;
`;

export const ColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.View`
  display: flex;
  width: ${metrics.SCREEN_WIDTH * 0.9};
  elevation: 5;
  shadow-offset: { width: 20, height: 20 };
  shadow-color: ${colors.DARK};
  shadow-opacity: 0.3;
  background-color: ${colors.WHITE};
  border-radius: ${metrics.RADIUS};
  padding-top: ${metrics.MEDIUM};
  margin-top: ${metrics.MEDIUM}px;
  padding: ${metrics.MEDIUM}px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH * 0.9};
  height: 83;
  elevation: 5;
  shadow-offset: { width: 20, height: 20 };
  shadow-color: ${colors.DARK};
  shadow-opacity: 0.3;
  background-color: ${colors.WHITE};
  border-radius: ${metrics.RADIUS};
  margin-top: ${metrics.MEDIUM}px;
  background-color: #F8F9FD;
`;

export const Divider = styled.View`
  height: 83;
  width: 1;
  background-color: ${colors.GREY};
`;

// button
export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH * 0.31};
`;


// text
export const Text = styled.Text`
  font-size: 14;
  color: ${colors.DARK};
  margin-top: ${metrics.XSMALL}px;
`;

export const Title = styled.Text`
  font-size: 14;
  color: ${colors.GREY};
  font-weight: bold;
  margin-top: ${metrics.BIG}px;
`;

export const TextButton = styled.Text`
  font-size: 12;
  color: ${colors.GREY};
 `;

// icon
export const CheckIcon = styled(Ionicons).attrs({
  name: 'ios-checkmark-circle-outline',
  size: 25,
  color: colors.GREEN,
})``;

export const CancelIcon = styled(MaterialIcons).attrs({
  name: 'highlight-off',
  size: 25,
  color: colors.RED,
})``;


export const InfoIcon = styled(MaterialIcons).attrs({
  name: 'info-outline',
  size: 25,
  color: colors.YELLOW,
})``;
