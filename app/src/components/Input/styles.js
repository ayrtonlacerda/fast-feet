import styled from 'styled-components/native';
import { colors, metrics } from 'styles';

export const Container = styled.TextInput.attrs((props) => ({
  multiline: props.big,
}))`
  width: 100%;
  height: ${(props) => (props.big ? 400 : 50)};
  background-color: ${colors.WHITE};
  border-width: 2; 
  border-color: ${colors.LIGHT_GREY};
  border-radius: ${metrics.RADIUS};
  padding: ${metrics.MEDIUM}px;
  font-size: 16px;
  elevation: ${(props) => (props.big ? 5 : 0)};
  shadowOffset:{  width: 10,  height: 0 };
  shadowColor: ${colors.DARK};
  shadowOpacity: ${(props) => (props.big ? 0.5 : 0)};
`;

/*
width: ${metrics.SCREEN_WITH * 0.9};
  height: 45;
  background-color: ${colors.WHITE};
  border-color: ${colors.LIGHT_GREY};
  border-radius: ${metrics.RADIUS};
*/
