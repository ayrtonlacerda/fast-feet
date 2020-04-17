import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  display: flex;
  width: ${({ big }) => (big ? 137 : 68)};
  height: ${({ big }) => (big ? 137 : 68)};
  border-radius: ${({ big }) => (big ? 69 : 34)};
  background-color: ${colors.VIOLET_LIGHT};
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ big }) => (big ? 25 : 0)};
`;

export const Title = styled.Text`
  font-size: ${({ big }) => (big ? 60 : 31)};
  color: ${colors.VIOLENT};
  font-weight: bold;
`;

export const Image = styled.Image.attrs((props) => ({
  source: { uri: props.src }, // todo src
  resizeMode: 'contain',
}))`
  width: ${({ big }) => (big ? 137 : 68)};
  height: ${({ big }) => (big ? 137 : 68)};
  border-radius: ${({ big }) => (big ? 69 : 34)};
`;
