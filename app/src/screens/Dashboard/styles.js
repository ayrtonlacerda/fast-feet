import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, metrics } from '../../styles';

// views
export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.WHITE};  
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 25px 0;
  padding-left: ${metrics.XXBIG}px;
  padding-right: ${metrics.XXBIG}px;
`;

export const HeaderInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 ${metrics.MEDIUM}px;
`;

export const DeliveryContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.WHITE};
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0 0 15px 0;
  padding-left: ${metrics.XXBIG}px;
  padding-right: ${metrics.XXBIG}px;
`;

export const ButtomContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150;
`;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    width: metrics.SCREEN_WIDTH * 0.95,
    alignItems: 'center',
    paddingLeft: metrics.XXBIG,
    paddingRight: metrics.XXBIG,
  },
})``;


// text

export const Text = styled.Text`
  font-size: 12;
  color: ${colors.GREY};
`;

export const Title = styled.Text`
  font-size: 22;
  color: ${colors.DARK};
  font-weight: bold;
`;

export const TextButton = styled.Text`
  font-size: 12;
  color: ${({ selected }) => (selected ? colors.PURPLE : colors.GREY)};
  font-weight: bold;
  text-decoration-line: ${({ selected }) => (selected ? 'underline' : 'none')};
 `;

// icon
export const ExitIcon = styled(MaterialIcons).attrs({
  name: 'exit-to-app',
  size: 30,
  color: colors.RED,
})``;


// button
export const Button = styled.TouchableOpacity``;

// status
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.WHITE,
  barStyle: 'dark-content',
})``;
